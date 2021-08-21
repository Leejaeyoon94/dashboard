import express from "express";
import Mongoose from "mongoose";
import { connectDB } from "./db.js";
import { config } from "./config.js";
import bodyParser from "body-parser";
const app = express();

app.set("view engine", "ejs");
// app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); // 2
app.use(bodyParser.urlencoded({ extended: true })); // 3

app.get("/", (req, res, next) => {
  return res.send("hi");
});

connectDB().then(() => {
  console.log("init");
  app.listen(config.host.port);
});
