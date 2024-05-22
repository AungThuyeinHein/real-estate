import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
const app = express();
dotenv.config();
mongoose
  .connect(process.env.Mongo_URI)
  .then(() => {
    {
      console.log("Connected to MongoDB");
    }
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/users", userRouter);
app.listen(3000, () => {
  console.log(`Server is running at port : ${3000}`);
});
