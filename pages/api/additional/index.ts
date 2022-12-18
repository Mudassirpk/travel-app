import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import onError from "../../../Helper/onError";
import multer from "multer";
import path from "path";
import Traveler from "../../../database/Models/userModal";
export const config = {
  api: {
    bodyParser: false,
  },
};

// types
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: path.resolve("public/images/travellers"),
  filename: function (
    req: Express.Request,
    file: any,
    callback: FileNameCallback
  ) {
    return callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
const handler = nextConnect(onError);

handler.use(upload.single("profile"));

handler.post(async (req: Request, res: NextApiResponse) => {
  const body: any = req.body;
  const text = JSON.parse(body.text);
  try {
    const foundTraveller = await Traveler.findOneAndUpdate(
      { email: text.email },
      {
        dob: text.dob,
        profilePhoto: `/images/travellers/${req.file.filename}`,
        gender: text.gender,
        location: text.location,
      },
      { new: true }
    );

    await foundTraveller.save();
    res.status(201).send("ok");
  } catch (err) {
    console.log(err);
  }
});

export default handler;
