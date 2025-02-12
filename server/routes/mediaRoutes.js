const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const { uploadMedia, getUserMedia, deleteMedia } = require("../controllers/mediaController");

const router = express.Router();



router.post("/upload", upload.array("files", 10), uploadMedia);
router.get("/user/:userId", getUserMedia);
router.delete("/:mediaId", deleteMedia);

module.exports = router;
