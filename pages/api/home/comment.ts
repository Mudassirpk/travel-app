import nextConnect from "next-connect";
import onError from "../../../Helper/onError";
import auth from "../../../Helper/auth";
import Express from "express";
const handler = nextConnect(onError);
import postModel from "../../../database/Models/postModel";
import Traveler from "../../../database/Models/userModal";
handler.use(auth);

handler.post(async (req: Express.Request, res: Express.Response) => {
  const commentor = req.body.commentor_id;
  const commentedPost = req.body.post_id;
  const text = req.body.text;
  try {
    // find the name of commentor
    const commentor_person = await Traveler.findById({ _id: commentor });

    // update the comments collection of the commented post
    const foundPost = await postModel.findByIdAndUpdate(
      { _id: commentedPost },
      {
        $push: {
          comments: {
            text,
            commentor_id: commentor,
            post_id: commentedPost,
            commentor_photo: commentor_person.profilePhoto,
            commentor_name: commentor_person.name,
          },
        },
      },
      {new:true}
    );

    const poster_id = foundPost.publisher;

    // add the notification to the poster of the commented post
    const poster = await Traveler.findByIdAndUpdate(
      { _id: poster_id },
      {
        $push: {
          notifications: {
            text: commentor_person.name + " commented on your post",
            from: commentor,
            content: { image: foundPost.image, comment: text },
          },
        },
      },
      {
        new: true,
      }
    );

    res.status(201).json( {text,
            commentor_id: commentor,
            post_id: commentedPost,
            commentor_photo: commentor_person.profilePhoto,
            commentor_name: commentor_person.name});
  } catch (err) {
    res.status(400).send(err);
  }
});

export default handler;
