import { Router } from "express";
import { index } from "./hd-quality.controller.js";

const router = Router();

router.get("/", index);

export default router;
