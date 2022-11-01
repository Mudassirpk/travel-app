import mongoose from "mongoose";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";


function connection(
  handler: (req: NextRequest, res: NextApiResponse<any>) => Promise<void>
) {
  if (mongoose.connections[0].readyState) {
    return handler;
  }
  mongoose
    .connect(`${process.env.DB_URI}`)
    .then(() => console.log("success"))
    .catch((err) => console.log(err));
}

export default connection;
