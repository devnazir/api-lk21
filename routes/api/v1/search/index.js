import { Router } from "express";
import { index } from "./search.controller.js";

const router = Router();

router.get("/", index);

export default router;
