import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  getUserListing,
} from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
const router = express.Router();

router.get("/test", test);
router.post("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/listings/:id", verifyUser, getUserListing);

export default router;
