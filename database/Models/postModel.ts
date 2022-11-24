import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    publisher: String,
    poster: String,
    location: String,
    experience: String,
    image: String,
    comments: [String],
    likes: Number,
  },
  { timestamps: true }
);

export default mongoose.models.post || mongoose.model("post", postSchema);
