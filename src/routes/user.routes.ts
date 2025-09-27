import { Router } from "express";
import { createTodo } from "../controllers/CreateTodo.controllers";
import { getAllTodos } from "../controllers/GetAllTodos.controllers";

const router = Router();

router.post("/createTodo", createTodo);

router.get("/getAllTodos", getAllTodos);

export default router;
