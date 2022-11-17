import { NextApiResponse } from "next";
import connection from "../../../database/connection";
import Traveller from "./../../../database/Models/userModal";

const handler = async (req: Request, res: NextApiResponse) => {
  if (req.method === "POST") {
    const query: any = req.body;
    const regex = new RegExp(query.query, "i");
    const foundTraveller: any = await Traveller.find({ name: regex });
    if (foundTraveller) {
      res.status(200).send(foundTraveller);
    }
  }
};

export default connection(handler);
