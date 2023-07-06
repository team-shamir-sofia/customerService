const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const adminRouter = require("./routers/adminRouter");
//const reservationRouter = require("./routers/reservationRouter");
const replyRouter = require("./routers/replyRouter");
const cors = require("cors");

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/", userRouter);
app.use("/", adminRouter);
app.use("/", replyRouter);
//app.use("/", reservationRouter);

app.listen(1414, () => {
  console.log("Server is running on 1414");
});
