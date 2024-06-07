import express from "express";
import { verifyUser } from "../utils/verifyUser.js";
import {
  createListing,
  deleteListing,
} from "../controllers/listing.controller.js";

const router = express.Router();

router.post("/", verifyUser, createListing);
router.delete("/:id", verifyUser, deleteListing);

export default router;
