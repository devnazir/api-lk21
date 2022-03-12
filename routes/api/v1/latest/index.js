import { Router } from "express";
import { index } from "./latest.controller.js";

const router = Router();

router.get("/", index);

export default router;
