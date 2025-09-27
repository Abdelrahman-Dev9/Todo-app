import { Router, Request, Response } from "express";
import {
  getAllTodos,
  createTodo,
  notTodo,
} from "../controllers/user.controllers";

const router = Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.all("*", notTodo);

export default router;
