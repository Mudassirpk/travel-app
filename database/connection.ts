import mongoose from "mongoose";

async function connection() {
  const response = await mongoose.connect(`${process.env.DB_URI}`);
}

export default connection;
