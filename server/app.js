const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");
const adsRoutes = require("./routes/ads.routes");
const errorMiddleware = require("./middlewares/error.middlewares");

require("dotenv").config();
const app = express();
app.use(express.json());
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials : true
// }))
app.use(cookieParser());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(errorMiddleware);

app.use("/api/user", usersRoutes);
app.use("/api/ads", adsRoutes);

const options = {
  useNewUrlParser: true,
};

mongoose
  .connect(process.env.MongoUrl, options)
  .then(() => console.log("connected to the mongodb"))
  .catch((err) => console.log(err));

app.listen(process.env.Port || 8000, () => {
  console.log("server is running");
});
