import { Router } from "express";
import { movieByGenreName } from "./genre.controller.js";

const router = Router();

router.get("/:genreName", movieByGenreName);

export default router;
