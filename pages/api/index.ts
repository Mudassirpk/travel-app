import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import connection from "../../database/connection";
import bcryptjs from "bcryptjs";
const mongoose = require("mongoose");
const Traveler = mongoose.model("Traveler");

type userType = {
  name: string;
  email: string;
  password: string;
};

const handler = async (req: Request, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    console.log(req.body);
    const { name, email, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newTraveler = new Traveler({
      name: name,
      email: email,
      password: hashedPassword,
    });
    newTraveler.save();
    res.status(201).send(newTraveler);
  }
};

export default connection(handler);
