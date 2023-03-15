const express = require("express");
const app = express();
const authRouter = require("./routers/authRouter");
const articlesRouter = require("./routers/articlesRouter");

app.get("/", (req, res) => {
  res.send("hello World!");
});
app.use("/", authRouter);
app.use("/", articlesRouter);

const port = 8000;

app.listen(port, () => {
  console.log("this app is listening to port: " + port);
});
