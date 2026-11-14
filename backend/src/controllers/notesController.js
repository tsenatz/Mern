export const getAllNotes = (req, res) => {
  res.status(200).send("you just Fetched the notes");
};
export const createANote = (req, res) => {
  res.status(201).json({ message: "post created!" });
};
export const updateNote = (req, res) => {
  res.status(200).json({ message: "NOte updated successfully!" });
};
export const deleteNote = (req, res) => {
  res.status(201).json({ message: "Note deleted successfully!" });
};
