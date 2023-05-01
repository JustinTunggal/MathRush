import express from "express";
import {
  getSoalMenengah,
  getSoalMenengahById,
  createSoalMenengah,
  updateSoalMenengah,
  deleteSoalMenengah,
} from "../controller/soalmenengah.js";

const router = express.Router();

// http://localhost:5000/soalmenengah
router.get("/soalmenengah", getSoalMenengah);
// http://localhost:5000/soalmenengah/1
router.get("/soalmenengah/:id", getSoalMenengahById);
// http://localhost:5000/soalmenengah
router.post("/soalmenengah", createSoalMenengah);
// http://localhost:5000/soalmenengah/1
router.patch("/soalmenengah/:id", updateSoalMenengah);
// http://localhost:5000/soalmenengah/1
router.delete("/soalmenengah/:id", deleteSoalMenengah);

export default router;