import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
} from "../controllers/listing.controller.js";

const router = express.Router();

router.post("/", verifyUser, createListing);
router.delete("/:id", verifyUser, deleteListing);
router.post("/update/:id", verifyUser, updateListing);
router.get("/:id", getListing);

export default router;
