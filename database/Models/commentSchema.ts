import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: String,
    commenter: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.comment ||
  mongoose.model("comment", commentSchema);
