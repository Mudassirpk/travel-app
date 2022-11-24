import { Express, Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";

export default function auth(req: Request, res: Response, next: NextFunction) {
  const token: string | string[] | undefined = req.headers["x-auth-token"];
  if (token) {
    console.log(token);
    const isAuthenticated = jwt.verify(
      token as string,
      process.env.SECRET_KEY_JWT as Secret
    );

    if (isAuthenticated) {
      next();
    }
  } else {
    res.status(401).send("Not Authorized");
  }
}
