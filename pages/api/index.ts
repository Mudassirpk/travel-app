import { NextApiResponse } from "next";
import Express from "express";
import connection from "../../database/connection";
import bcryptjs from "bcryptjs";
import Traveler from "./../../database/Models/userModal";

const handler = async (req: Express.Request, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcryptjs.hash(password, 10);
      const newTraveler = new Traveler({
        name: name,
        email: email,
        password: hashedPassword,
      });
      const savedTraveler = await newTraveler.save();
      res.status(201).send(savedTraveler);
    } catch (err: any) {
      if (err.code === 11000) {
        res.status(400).json({
          type: "error",
          code: 11000,
          messege: err.messege,
        });
      }
    }
  }
};

export default connection(handler);
