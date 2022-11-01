const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: String,
  timestamps: true,
  commenter: String,
});

export default mongoose.model("Comment", commentSchema);
