const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// File imports
const authRoutes = require("./routes/auth.routes");
const notesRoutes = require("./routes/notes.routes");
const db = require("./db/connectToMongoDB");


app.use("/api/auth", authRoutes);
app.use("", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is lisnting on http://localhost:${PORT}`);
});
