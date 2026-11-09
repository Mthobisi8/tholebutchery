const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static("dist")); // or build folder
// Serve static files FIRST
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
