import { NextApiResponse } from "next";

const onError = {
  onError: (err, req: Request, res: NextApiResponse, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
};

export default onError;
