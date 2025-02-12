const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ["image", "video"], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Media", mediaSchema);
