import { Router } from "express";
import { index } from "./lists.controller.js";

const router = Router();

router.get("/:category", index);

export default router;
