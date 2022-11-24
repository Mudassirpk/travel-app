import { NextApiResponse } from "next";
import connection from "../../../database/connection";
import Traveler from "../../../database/Models/userModal";

const handler = async (req: Request, res: NextApiResponse) => {
  if (req.method === "POST") {
    const query: any = req.body;
    const regex = new RegExp(query.query, "i");
    const foundTraveler: any = await Traveler.find({ name: regex });
    if (foundTraveler) {
      res.status(200).send(foundTraveler);
    }
  }
};

export default connection(handler);
