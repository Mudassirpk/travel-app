import { NextApiResponse } from "next";
import connection from "../../../database/connection";
import Traveler from "../../../database/Models/userModal";
import jwt, { Secret } from "jsonwebtoken";
import postModel from "../../../database/Models/postModel";
import Express from "express";

export async function handler(req: Express.Request, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    const body: any = req.body;
    const email: string = body.email;
    const token = body.token;
    try {
      await connection()
      const foundTraveler = await Traveler.findOne({ email: email });
      if (foundTraveler) {
        const isAuthenticated = jwt.verify(
          token,
          process.env.SECRET_KEY_JWT as Secret
        );
        if (isAuthenticated) {
          const followers = foundTraveler.followers;
          const following = foundTraveler.following;
          const mergedIds = followers.concat(following, foundTraveler._id);
          const feedData = await postModel
            .find({
              publisher: { $in: mergedIds },
            })
            .sort({ createdAt: -1 });
          res.status(200).send({ foundTraveler, feedData });
        }
      } else {
        res.status(404).send("not-found");
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export default handler;
