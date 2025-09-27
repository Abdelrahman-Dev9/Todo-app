import { Router } from "express";
import { createTodo } from "../controllers/CreateTodo.controllers";
import { getAllTodos } from "../controllers/GetAllTodos.controllers";
import { deleteTodo } from "../controllers/DeleteTodo.controllers";

const router = Router();

router.post("/createTodo", createTodo);

router.get("/getAllTodos", getAllTodos);
router.delete("/deleteTodo/:id", deleteTodo);

export default router;
