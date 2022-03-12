import { Router } from "express";
import { index } from "./imdb-rating.controller.js";

const router = Router();

router.get("/", index);

export default router;
