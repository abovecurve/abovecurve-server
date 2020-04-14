// Dependencies
const express = require("express");

// Constants
const PORT = process.env.PORT || 3000;
const address = process.env.SERVER_ADDRESS || "127.0.0.1";

// Instantiate express server
const app = express();

app.get("*", function (req, res) {
  res.send("Hello from the server!");
});

app.listen(PORT, () =>
  console.log(`Server running on http://${address}:${PORT}`)
);
