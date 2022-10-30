
import { NextApiResponse } from "next";

export default function handler(req:Request,res:NextApiResponse){
    if(req.method === "POST"){
        res.send(req.body);
    }
}