import { NextApiResponse } from "next";
import connection from "../../../database/connection";
import Traveler from "../../../database/Models/userModal";
import bcryptjs from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

const handler = async (req: Request, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    const body: any = req.body;
    const email = body?.email;
    const password = body?.password;

    const foundTraveller = await Traveler.findOne({ email: email });
    if (foundTraveller) {
      const isPasswordMatched = await bcryptjs.compare(
        password,
        foundTraveller.password
      );
      if (isPasswordMatched) {
        const token = jwt.sign(
          { email: foundTraveller.email },
          process.env.SECRET_KEY_JWT as Secret
        );
        res.status(200).send({
          email: foundTraveller.email,
          token: token,
        });
      } else {
        res.status(404).json({
          messege: "Invalid email or password",
        });
      }
    } else {
      res.status(404).json({
        messege: "Invalid email or password",
      });
    }
  }
};

export default connection(handler);
