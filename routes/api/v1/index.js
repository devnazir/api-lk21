import { Router } from "express";
import latestRoutes from "./latest/index.js";
import genreRoutes from "./genre/index.js";
import listRoutes from "./lists/index.js";
import hdQualityRoutes from "./hd-quality/index.js";
import popularRoutes from "./popular/index.js";
import trendingRoutes from "./trending/index.js";
import imdbRatingRoutes from "./imdb-rating/index.js";
import releaseRoutes from "./release/index.js";
import yearRoutes from "./year/index.js";
import resolutionRoutes from "./resolution/index.js";
import alphabetRoutes from "./alphabet/index.js";
import searchRoutes from "./search/index.js";
import countryRoutes from "./country/index.js";

const router = Router();

router.use("/latest", latestRoutes);
router.use("/genre", genreRoutes);
router.use("/lists", listRoutes);
router.use("/hd-quality", hdQualityRoutes);
router.use("/popular", popularRoutes);
router.use("/trending", trendingRoutes);
router.use("/imdb-rating", imdbRatingRoutes);
router.use("/release", releaseRoutes);
router.use("/year", yearRoutes);
router.use("/resolution", resolutionRoutes);
router.use("/alphabet", alphabetRoutes);
router.use("/search", searchRoutes);
router.use("/country", countryRoutes);

export default router;
