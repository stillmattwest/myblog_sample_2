const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/home", (req, res) => res.sendFile(__dirname + "/public/home.html"));

app.get("/", (req, res) => res.send("Hello Express"));

app.listen(port, () => console.log(`Listening on port ${port}`));
