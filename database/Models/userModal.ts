import mongoose from "mongoose";

const travelerSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    posts: {
      type: [String],
    },
    phone: String,
    followers: [String],
    following: [String],
    dob: String,
    gender: String,
    profilePhoto: String,
    location: String,
    media: [String],
    notifications: {
      type: [
        {
          text: String,
          from: String,
          content: {
            type:{
              image:String,
              comment:String
            }
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const Traveler =
  mongoose.models.traveler || mongoose.model("traveler", travelerSchema);

export default Traveler;
