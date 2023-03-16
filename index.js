const express = require("express");
const app = express();
const authRouter = require("./routers/authRouter");
const articlesRouter = require("./routers/articlesRouter");
const fileUpload = require("./routers/fileUpload");

// middleware to transform data to json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello World!");
});
app.use("/", authRouter);
app.use("/", articlesRouter);
app.use("/", fileUpload);

const port = 8000;

app.listen(port, () => {
  console.log("this app is listening to port: " + port);
});
