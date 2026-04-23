import Note from "../models/notes.model.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json("Error in getNotes Controller");
    console.log("Error in getNotes Controller ", error);
  }
};

export const getNoteById = async (req, res) => {
  try {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json("Error in getNotes Controller");
    console.log("Error in getNotes Controller ", error);
  }
};

export const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(200).json({ message: "Note created succesfully", savedNote });
  } catch (error) {
    res.status(400).json("Error in createNotes Controller");
    console.log("Error in createNotes Controller ", error);
  }
};

export const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const id = req.params.id;
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { returnDocument: "after" },
    );

    res.status(200).json({ messsage: "updated note Succesfully", updatedNote });
  } catch (error) {
    res.status(400).json("Error in updateNotes Controller");
    console.log("Error in updateNotes Controller ", error);
  }
};

export const deleteNotes = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteNote = await Note.findByIdAndDelete(id);
    res.status(200).json("Note deleted Successfully");
  } catch (error) {
    res.status(400).json("Error in deleteNotes Controller");
    console.log("Error in deleteNotes Controller ", error);
  }
};
