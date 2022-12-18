import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import onError from "../../../Helper/onError";
import auth from "../../../Helper/auth";
import postModel from "../../../database/Models/postModel";
const handler = nextConnect(onError);

handler.use(auth);
handler.post(async (req: Request, res: NextApiResponse) => {
  const body: any = req.body;
  const likedPost = await postModel.find({ _id: body.likedPost });
  try {
    if (likedPost[0].likers?.includes(body.liker)) {
      const removeLike = await postModel.findOneAndUpdate(
        { _id: body.likedPost },
        { likes: body.currentLikes - 1, $pull: { likers: body.liker } },
        { new: true }
      );
      console.log("after removal: ", removeLike);
      await removeLike.save();
      res.status(409).send("liked");
    } else {
      const updatedPost = await postModel.findOneAndUpdate(
        { _id: body.likedPost },
        { likes: body.currentLikes + 1, $push: { likers: body.liker } },
        { new: true }
      );
      const savedPost = await updatedPost.save();
      console.log(savedPost);
      res.status(201).send(savedPost);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

export default handler;
