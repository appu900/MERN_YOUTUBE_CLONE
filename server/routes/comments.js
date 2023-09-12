import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/commentController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router
  .post("/", verifyToken, addComment)
  .delete("/:id", verifyToken, deleteComment)
  .get("/:videoId", getComments);

export default router;
