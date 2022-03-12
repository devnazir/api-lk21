import { Router } from "express";
import { index } from "./year.controller.js";

const router = Router();

router.get("/:year", index);

export default router;
