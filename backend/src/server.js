import express from "express";
import notesRoutes from "./routes/noteRoutes.js"

const PORT = 3000;

const app = express();

app.use("/api/notes",notesRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
