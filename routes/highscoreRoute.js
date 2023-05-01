import express from "express";
import {
  getHighscore,
  createHighscore,
  updateHighscore,
  deleteHighscore,
  getLowestHighscore,
  getHighscoreCount,
} from "../controller/highscore.js";

const router = express.Router();

// http://localhost:5000/highscore
router.get("/highscore", getHighscore);
// http://localhost:5000/highscore/1
//router.get("/highscore/:id", getHighscoreById);
// http://localhost:5000/highscore
router.post("/highscore", createHighscore);
// http://localhost:5000/highscore/1
router.patch("/highscore/:id", updateHighscore);
// http://localhost:5000/highscore/1
router.delete("/highscore/:id", deleteHighscore);
// http://localhost:5000/highscore/lowest
router.get("/highscore/lowest", getLowestHighscore);
// http://localhost:5000/highscore/count
router.get("/highscore/count", getHighscoreCount);

export default router;
