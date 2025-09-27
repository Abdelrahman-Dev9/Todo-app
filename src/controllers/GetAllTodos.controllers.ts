import { Request, Response } from "express";
import Todo from "../models/Todo";

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
};
