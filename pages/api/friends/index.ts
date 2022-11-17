import { NextApiResponse } from "next";
import connection from "../../../database/connection";

const handler = async (req: Request, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    console.log(req.body);
  }
};

export default connection(handler);
