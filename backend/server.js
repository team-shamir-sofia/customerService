const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.listen(1414, () => {
  console.log("Server is running on 1414");
});
