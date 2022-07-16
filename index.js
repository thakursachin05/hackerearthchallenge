const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const imgRoute = require("./routes/images");
let cors = require("cors");
app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECT SUCCESSFUL!!"))
  .catch((err) => console.log(err.message));

app.use(express.json());

app.use("/", imgRoute);

app.listen(8800, () => {
  console.log("Backend Server is running!");
});