import { NextApiResponse } from "next";
import multer from "multer";
import path from "path";
import Express from "express";
import nc from "next-connect";
import auth from "../../../Helper/auth";
import postModel from "../../../database/Models/postModel";
import onError from "../../../Helper/onError";
import Traveler from "../../../database/Models/userModal";
export const config = {
  api: {
    bodyParser: false,
  },
};

type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: path.resolve("public/images"),
  filename: function (
    req: Express.Request,
    file: any,
    callback: FileNameCallback
  ) {
    return callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const handler = nc(onError);

handler.use(upload.single("photo"));
handler.use(auth);

handler.post(async (request: Express.Request, res: NextApiResponse) => {
  const req: any = request;
  const body: any = req.body;
  const text = JSON.parse(body.text);
  try {
    const poster = await Traveler.findById({ _id: text.poster });
    const newPost = new postModel({
      publisher: text.poster,
      location: text.location,
      experience: text.experience,
      image: `/images/${req.file?.filename}`,
      poster: poster.name,
      likes: 0,
      likers: [],
      poster_image: text.poster_image,
    });
    await Traveler.findOneAndUpdate(
      { _id: text.poster },
      { posts: newPost._id, $push: { media: "/images/" + req.file.filename } },
      { new: true }
    );

    const savedPost = await newPost.save();
    res.status(201).send(savedPost);
  } catch (err) {
    res.status(400).send(err)
  }
});

export default handler;
