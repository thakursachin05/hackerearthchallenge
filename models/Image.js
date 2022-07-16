const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    url: { type: String },
    detail: { type: String }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Image", ImageSchema);