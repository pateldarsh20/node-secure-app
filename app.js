const AWS_SECRET_ACCESS_KEY = "AKIA123456789SECRET";
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Secure CI/CD Pipeline Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});