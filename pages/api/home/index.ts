import { NextApiResponse } from "next";
import connection from "../../../database/connection";
import Traveler from "../../../database/Models/userModal";
import jwt, { Secret } from "jsonwebtoken";
import postModel from "../../../database/Models/postModel";
export async function handler(req: Request, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    const body: any = req.body;
    const email: string = body.email;
    const token = body.token;
    try {
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
          console.log(mergedIds);
          const feedData = await postModel
            .find({
              publisher: { $in: mergedIds },
            })
            .sort({ createdAt: -1 });
          res.status(200).send({ foundTraveler, feedData });
        }
      }
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}

export default connection(handler);
