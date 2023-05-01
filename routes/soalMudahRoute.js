import express from "express";
import {
  getSoalMudah,
  getSoalMudahById,
  createSoalMudah,
  updateSoalMudah,
  deleteSoalMudah,
} from "../controller/soalmudah.js";

const router = express.Router();

// http://localhost:5000/soalmudah
router.get("/soalmudah", getSoalMudah);
// http://localhost:5000/soalmudah/:id
router.get("/soalmudah/:id", getSoalMudahById);
// http://localhost:5000/soalmudah
router.post("/soalmudah", createSoalMudah);
// http://localhost:5000/soalmudah/:id
router.patch("/soalmudah/:id", updateSoalMudah);
// http://localhost:5000/soalmudah/:id
router.delete("/soalmudah/:id", deleteSoalMudah);

export default router;