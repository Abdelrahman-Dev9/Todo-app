import { Router, Request, Response } from "express";
import { getUsers, createUser, noRoute } from "../controllers/user.controllers";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.all("*", noRoute);

export default router;
