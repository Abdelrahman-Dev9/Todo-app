import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    msg: "All Users here!",
  });
};

export const createUser = (req: Request, res: Response) => {
  res.json({
    msg: "createUser",
  });
};

export const noRoute = (req: Request, res: Response) => {
  res.status(404).json({
    msg: "ERROR: Route not found",
  });
};
