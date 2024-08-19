const express = require("express");
const router = express.Router();
const {
  addNotes,
  getNotes,
  updateNotes,
  deleteNotes,
} = require("../controllers/notes.controllers");

router.post("/", addNotes);

router.get("/", getNotes);

router.put("/:id", updateNotes);

router.delete("/:id", deleteNotes);

module.exports = router;
