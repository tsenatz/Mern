import "dotenv/config";
import express from "express";
import notesRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3000;


const app = express();
connectDB();
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
