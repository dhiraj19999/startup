import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://smartwebai.in",
    "https://www.smartwebai.in",
    "https://smartwebai-frontend.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());

app.use("/api/contact", contactRoutes);

export default app;
