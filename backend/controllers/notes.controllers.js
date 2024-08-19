const Notes = require("../Models/notes.Models");

const addNotes = async (req, res) => {
  try {
    const { title, desc } = req.body;
    // Create new Notes document
    const newNotes = new Notes({ title, desc });

    // Save new Notes
    if (newNotes) {
      const response = await newNotes.save();
      res.status(201).json(response);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getNotes = async (req, res) => {
  try {
    const data = await Notes.find();

    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateNotes = async (req, res) => {
  try {
    const notesId = req.params.id; // Extract the id from the URL paramter
    const updateNotes = req.body;

    const response = await Notes.findByIdAndUpdate(notesId, updateNotes, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ err: "Notes not found" });
    }
    console.log("data  updated");
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteNotes = async (req, res) => {
  try {
    const notesId = req.params.id; // Extract the id from the URL parameter
    const response = await Notes.findByIdAndDelete(notesId);
    if (response) {
      res.status(200).json({ message: "Notes Delete Successfully" });
    } else {
      res.status(404).json({ err: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addNotes, getNotes, updateNotes, deleteNotes };
