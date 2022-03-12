import { Router } from "express";
import { getListAlphabets, index } from "./alphabet.controller.js";

const router = Router();

router.get("/list", getListAlphabets);
router.get("/:alphabet", index);

export default router;
