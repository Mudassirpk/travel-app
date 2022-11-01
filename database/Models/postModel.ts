const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: String,
  image: String,
  timeStamps: true,
  comments: [String],
  likes: Number,
});

export default mongoose.model("Post", postSchema);
