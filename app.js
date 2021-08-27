const express = require("express");
const cors = require("cors");
const app = express();
//importing routes-->
const usersRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const postsRouter = require("./routes/postRouter");
//middlewares-->
app.use(express.json());
app.use(cors());
//routing pages-->
app.use("/api/v1", authRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/users", usersRouter);

module.exports = app;
