import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (error) {
    console.log("error in get all notes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title: title, content: content });
    await note.save();
    res.status(201).json({ note });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving note" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      {
        new: true,
      }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating note" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) {
      res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "fuckup deleting the note" });
  }
};

export const getNotebyId = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error finding note by id" });
  }
};
