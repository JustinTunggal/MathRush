import express from "express";
import {
  getSoalSulit,
  getSoalSulitById,
  createSoalSulit,
  updateSoalSulit,
  deleteSoalSulit,
} from "../controller/soalsulit.js";

const router = express.Router();

// http://localhost:5000/soalsulit
router.get("/soalsulit", getSoalSulit);
// http://localhost:5000/soalsulit/1
router.get("/soalsulit/:id", getSoalSulitById);
// http://localhost:5000/soalsulit
router.post("/soalsulit", createSoalSulit);
// http://localhost:5000/soalsulit/1
router.patch("/soalsulit/:id", updateSoalSulit);
// http://localhost:5000/soalsulit/1
router.delete("/soalsulit/:id", deleteSoalSulit);

export default router;