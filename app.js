const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("ABHISHEK YADAV DEV");
});

app.listen(4001, () => {
  console.log(`Server Started at ${4001}`);
});
