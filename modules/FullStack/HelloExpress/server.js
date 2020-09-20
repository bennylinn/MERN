const express = require("express");
const app = express();
const port = 8000;

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "qwer" });
});

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );