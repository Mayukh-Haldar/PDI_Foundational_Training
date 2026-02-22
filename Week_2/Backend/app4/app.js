const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/download/resume", (req, res) => {
  const manualPath = path.join(__dirname, "public", "doc", "resume_mh.pdf");
  res.download(manualPath);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
