const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");
const adminRouter = require("./routers/adminRouter");
const reservationRouter = require("./routers/reservationRouter");
const replyRouter = require("./routers/replyRouter");
const cors = require("cors");
require("./modules/connection");

app.use(express.json());


app.use(cors({ origin: "*" }));

app.use("/", userRouter);
app.use("/", adminRouter);
app.use("/", replyRouter);
app.use("/", reservationRouter);

app.listen(8000, () => {
 console.log("Server is running on 8000....");

});
