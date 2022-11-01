const mongoose = require("mongoose");

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

const Traveler =  mongoose.model("Traveler", travelerSchema);
module.exports = Traveler;
