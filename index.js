const express = require("express");
const app = express();
const port = 8081;


app.get("/welcome", (req, res) => {
  res.status(200).type("text/plain").send("Welcome to Dominos!");
});


app.get("/contact", (req, res) => {
  res.status(200).json({ phone: "18602100000", email: "guestcaredominos@jublfood.com" });
});


app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
