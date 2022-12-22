import nextConnect from "next-connect";
import onError from "../../../Helper/onError";
import auth from "../../../Helper/auth";
import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
const handler = nextConnect(onError);
import Traveler from "../../../database/Models/userModal";
handler.use(auth);
handler.post(async (req: Request, res: Response) => {
  try {
    const foundUser = await Traveler.findOne({ _id: req.body.id });
    if (foundUser) {
      const isPasswordMatched: boolean = await bcryptjs.compare(
        req.body.old_password,
        foundUser.password
      );
      if (isPasswordMatched) {
        const newHasedPassword: string = await bcryptjs.hash(
          req.body.new_password,
          10
        );
        await Traveler.findByIdAndUpdate(
          { _id: req.body.id },
          { password: newHasedPassword },
          { new: true }
        );
        res.status(201).json({
          messege: "Password changed successfully",
        });
      } else {
        res.status(400).json({
          messege: "Incorrect old password",
        });
      }
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

export default handler;
