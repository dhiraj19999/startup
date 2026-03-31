import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import app from "./src/app.js";
import cors from "cors";

app.use(cors({
  origin: "*", // Allow all origins (you can specify your frontend URL here)
}));

dotenv.config();
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
  console.log("MONGO_URI =", process.env.MONGO_URI);

});
