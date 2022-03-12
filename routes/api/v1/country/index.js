import { Router } from "express";
import { index } from "./country.controller.js";

const router = Router();

router.get("/:countryName", index);

export default router;
