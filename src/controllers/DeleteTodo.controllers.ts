import { Request, Response } from "express";
import Todo from "../models/Todo";

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({
      message: "todo deleted",
    });
  } catch (error) {
    res.json({ message: "something went wrong" });
  }
};
