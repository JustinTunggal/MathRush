import express from "express";
import cors from "cors";
import soalMudahRoute from "./routes/soalMudahRoute.js";
import soalMenengahRoute from "./routes/soalMenengahRoute.js";
import soalSulitRoute from "./routes/soalSulitRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(soalMudahRoute);
app.use(soalMenengahRoute);
app.use(soalSulitRoute);

app.listen(5000, () => console.log("Server running on port 5000"));