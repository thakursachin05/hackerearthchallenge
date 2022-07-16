const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const imgRoute = require("./routes/images");
let cors = require("cors");
const port = process.env.PORT || 8800;

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

app.listen(port, () => {
  console.log(`Backend Server is running! at port ${port}`);
});
