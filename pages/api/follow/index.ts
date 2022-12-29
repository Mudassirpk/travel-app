import nc from "next-connect";
import onError from "../../../Helper/onError";
import auth from "../../../Helper/auth";
import { NextApiResponse } from "next";
import Traveler from "../../../database/Models/userModal";
const handler = nc(onError);
handler.use(auth);

handler.post(async (req: Request, res: NextApiResponse) => {
  const body: any = req.body;
  try {
    const from = await Traveler.findOneAndUpdate(
      { _id: body.id_from },
      { $push: { following: body.id_to } },
      { new: true }
    );
    const to = await Traveler.findOneAndUpdate(
      { _id: body.id_to },
      { $push: { followers: body.id_from } },
      { new: true }
    );

    await to.save();
    await from.save();
    res.status(201).send("followed");
  } catch (err) {
    res.status(400).send(err);
  }
});

export default handler;
