//packages
import express from "express";
import "dotenv/config";
import cors from "cors"

//local imports
import notesRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./midlleware/rateLimiter.js";
const PORT = process.env.PORT || 3000;

const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(rateLimiter);

app.use((req, res, next) => {
  console.log(`req method is ${req.method} & req URL is ${req.url}`);
  next();
});
app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
  });
});
