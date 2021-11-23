import mongoose from "mongoose";
import express from "express";
import router from "./router.js";

const PORT = 5000;
const DB_URL = 123;

const app = express();
app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}
startApp();
