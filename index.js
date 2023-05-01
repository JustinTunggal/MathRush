import express from "express";
import cors from "cors";
import soalMudahRoute from "./routes/soalMudahRoute.js";
import soalMenengahRoute from "./routes/soalMenengahRoute.js";
import soalSulitRoute from "./routes/soalSulitRoute.js";
import highscoreRoute from "./routes/highscoreRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(soalMudahRoute);
app.use(soalMenengahRoute);
app.use(soalSulitRoute);
app.use(highscoreRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
