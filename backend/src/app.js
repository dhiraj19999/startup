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
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// ⭐ important for preflight










app.use(express.json());

app.use("/api/contact", contactRoutes);

export default app;
