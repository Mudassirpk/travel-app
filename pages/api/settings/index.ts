import nextConnect from "next-connect";
import onError from "../../../Helper/onError";
import multer from "multer";
import path from "path";
import auth from "../../../Helper/auth";
import Traveler from "../../../database/Models/userModal";
import Express from "express";

import { NextApiResponse } from "next";
export const config = {
  api: {
    bodyParser: false,
  },
};
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: path.resolve("public/images/travellers"),
  filename: function (
    req: Express.Request,
    file: any,
    callback: FileNameCallback
  ) {
    return callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const handler = nextConnect(onError);

handler.use(upload.single("newprofile"));
handler.use(auth);
handler.post(async (req: Express.Request, res: NextApiResponse) => {
  try {
    let body: any = req.body;
    const objectBody = JSON.parse(body.fields);
    let toBeUpdated = objectBody.toBeUpdated;

    if (req.file) {
      toBeUpdated = {
        ...toBeUpdated,
        profilePhoto: "/images/travellers/" + req.file.filename,
      };
      body = {
        ...body,
        $push: { media: "/images/travellers/" + req.file.filename },
      };
    }
    await Traveler.findByIdAndUpdate({ _id: objectBody.id }, toBeUpdated, {
      new: true,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

export default handler;
