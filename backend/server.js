import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

//middleware
app.use(express.json());
app.use(cors());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("server started on port 5001");
});
