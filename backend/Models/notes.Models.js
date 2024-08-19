const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Notes = mongoose.model("Notes", notesSchema);
module.exports = Notes;
