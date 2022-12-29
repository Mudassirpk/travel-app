import Express from "express";
const onError = {
  onError: (
    err: any,
    req: Express.Request,
    res: Express.Response,
    next: any
  ) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req: Express.Request, res: Express.Response) => {
    res.status(404).end("Page is not found");
  },
};

export default onError;
