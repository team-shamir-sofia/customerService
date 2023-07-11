const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const adminRouter = require("./routers/adminRouter");
const inquiryRouter = require("./routers/inquiryRouter");
const replyRouter = require("./routers/replyRouter");
const cors = require("cors");
require("./modules/connection");

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/", userRouter);
app.use("/", adminRouter);
app.use("/", replyRouter);
app.use("/", inquiryRouter);

app.listen(8000, () => {
  console.log("Server is running on 8000....");
});
