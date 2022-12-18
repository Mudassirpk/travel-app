import mongoose from "mongoose";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import Express from 'express'

function connection(
  handler: (req: Express.Request, res: NextApiResponse<any>) => Promise<void>
) {
  if (mongoose.connections[0].readyState) {
    console.log('at if statement in connection')
    return handler;
  }
  console.log('connecting to mongodb')
  mongoose
    .connect(`${process.env.DB_URI}`)
    .then(() => console.log("success"))
    .catch((err) => console.log("err",err));
}

export default connection;
