import { Router } from "express";
import { index } from "./resolution.controller.js";

const router = Router();

router.get("/:resolution", index);

export default router;
