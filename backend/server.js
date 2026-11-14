import express from "express";
const PORT = 3000;

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("you got 20 notes");
});
app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "post created!" });
});
app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "NOte updated successfully!" });
});
app.delete("/api/notes/:id", (req,res)=>{
    res.status(201).json({"message":"Note deleted successfully!"})
})

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
