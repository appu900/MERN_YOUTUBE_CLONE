import express from "express";
import { commentstest } from "../controllers/commentController.js";

const router = express.Router();


router.get("/test",commentstest);




export default router;