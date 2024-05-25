import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUoC5cmzyqEonX_ZR00BU9tO_NJt0tekZ9lTs36oRyjg&s",
    },
  },
  { timestamps: true } // Use timestamps instead of timeseries
);

const User = mongoose.model("User", userSchema);

export default User;
