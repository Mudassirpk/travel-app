import mongoose from "mongoose";

const travelerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  posts: {
    type: [String],
  },
  followers: [String],
  following: [String],
});

const Traveler =
  mongoose.models.traveler || mongoose.model("traveler", travelerSchema);

export default Traveler;
