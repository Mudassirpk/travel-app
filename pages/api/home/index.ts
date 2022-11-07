import { NextApiResponse } from "next";
import connection from "../../../database/connection";
import Traveler from "../../../database/Models/userModal";
import jwt, { Secret } from "jsonwebtoken";

export async function handler(req: Request, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    const body: any = req.body;
    const email: string = body.email;
    const token = body.token;

    const foundTraveler = await Traveler.findOne({ email: email });
    if (foundTraveler) {
      const isAuthenticated = jwt.verify(
        token,
        process.env.SECRET_KEY_JWT as Secret
      );
      if (isAuthenticated) {
        res.status(200).send(foundTraveler);
      }
    }
  }
}

export default connection(handler);
