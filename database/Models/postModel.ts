import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    publisher: String,
    poster: String,
    location: String,
    experience: String,
    image: String,
    comments: {
      type: [
        {
          text: String,
          commentor_id: String,
          post_id: String,
          commentor_photo: String,
          commentor_name: String,
        },
      ],
    },
    likes: Number,
    likers: [String],
    poster_image: String,
  },
  { timestamps: true }
);

export default mongoose.models.post || mongoose.model("post", postSchema);
