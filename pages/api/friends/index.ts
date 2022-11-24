import { NextApiResponse } from "next";
import connection from "../../../database/connection";
import nc from "next-connect";
import onError from "../../../Helper/onError";
import auth from "../../../Helper/auth";
import Traveler from "../../../database/Models/userModal";

const handler = nc(onError);
handler.use(auth);

handler.post(async (req: Request, res: NextApiResponse) => {
  const body: any = req.body;
  console.log(body);

  try {
    const friends = await Traveler.find({ _id: { $in: body.friends } });
    res.status(200).send(friends);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default handler;
