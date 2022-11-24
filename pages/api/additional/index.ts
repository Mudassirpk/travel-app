import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import onError from "../../../Helper/onError";
import multer from "multer";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

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
  console.log(req.body);
});

export default handler;
