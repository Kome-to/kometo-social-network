import { Request, Response } from "express";
import path from "path";

class FileController {
  public getFile = async (req: Request, res: Response) => {
    const { userId, filename } = req.params;
    res.sendFile(path.join(`${process.cwd()}/assets/${userId}`, filename));
  };
}

export default new FileController();
