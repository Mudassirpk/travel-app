import nextConnect from "next-connect";
import onError from "../../../Helper/onError";
import auth from "../../../Helper/auth";
import { NextApiResponse } from "next";

const handler = nextConnect(onError);
handler.use(auth);
handler.post(async (req: Request, res: NextApiResponse) => {
  console.log(req.body);
});
