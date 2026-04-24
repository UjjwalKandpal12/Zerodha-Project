import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import PositionModel from "../models/PositionModel.js";
import data from "./data.js";
const dbUrl = process.env.MONGO_URL;

async function main() {
  await mongoose.connect(dbUrl);
  await initDb();
}
main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

const initDb = async () => {
  await PositionModel.deleteMany({});
  console.log("Positions collection cleared");
  await PositionModel.insertMany(data);
  console.log("data was initialized");
};
