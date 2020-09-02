import express from "express";
const app = express();
const port = 8080;

// route handler for default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
