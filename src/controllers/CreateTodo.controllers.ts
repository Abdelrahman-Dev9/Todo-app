import { Request, Response } from "express";
import Todo from "../models/Todo";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { task } = req.body;
    const newTask = new Todo({ task });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
