const Media = require("../model/mediaModel");
const s3 = require("../config/aws");

const { DeleteObjectCommand } = require("@aws-sdk/client-s3");


module.exports.uploadMedia = async (req, res) => {
  try {
    const { userId } = req.body;
    
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    // Process multiple uploaded files
    const uploadedMedia = req.files.map((file) => ({
      userId,
      url: file.location, // AWS S3 file URL
      type: file.mimetype.startsWith("image") ? "image" : "video",
    }));

    // Save media in MongoDB
    const savedMedia = await Media.insertMany(uploadedMedia);

    res.status(201).json({
      message: "Upload successful",
      media: savedMedia,
    });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};


module.exports.getUserMedia = async (req, res) => {
  try {
    const { userId } = req.params;
    const mediaList = await Media.find({ userId });
    res.status(200).json(mediaList);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch media", error: error.message });
  }
};


module.exports.deleteMedia = async (req, res) => {
  try {
    const { mediaId } = req.params;
    const media = await Media.findById(mediaId);
    if (!media) return res.status(404).json({ message: "Media not found" });

    // Extract key from URL
    const key = media.url.split(".com/")[1];

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    };

    // Use .send() method
    await s3.send(new DeleteObjectCommand(params));

    await Media.findByIdAndDelete(mediaId);
    res.status(200).json({ message: "Media deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete media", error: error.message });
  }
};
