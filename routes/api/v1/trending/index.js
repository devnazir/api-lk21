import { Router } from "express";
import { index } from "./trending.controller.js";

const router = Router();

router.get("/", index);

export default router;
