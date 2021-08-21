import Mongoose from "mongoose";
import { config } from "./config.js";
//mongoose 연결
export async function connectDB() {
  return Mongoose.connect(config.db.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}
