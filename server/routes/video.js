import express from "express";
import { testVideo } from "../controllers/videoController.js";

const router = express.Router();



router.get("/test",testVideo)





export default router;