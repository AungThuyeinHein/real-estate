import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
const app = express();
app.use(express.json());
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
app.use("/api/auth", authRouter);
app.listen(3000, () => {
  console.log(`Server is running at port : ${3000}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statuscode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
