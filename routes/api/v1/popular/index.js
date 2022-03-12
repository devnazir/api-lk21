import { Router } from "express";
import { index } from "./popular.controller.js";

const router = Router();

router.get("/", index);

export default router;
