import { Router } from "express";
import { createTodo } from "../controllers/CreateTodo.controllers";

const router = Router();

router.post("/createTodo", createTodo);

export default router;
