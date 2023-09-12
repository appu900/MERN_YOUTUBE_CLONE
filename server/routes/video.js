import express from "express";
import { addVideo, addView, deleteVideo, getResultByTag, getSearchResult, random, subscribed, trend, updateVideo} from "../controllers/videoController.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();



// router.get("/test",testVideo)

router
  .post("/",verifyToken,addVideo)
  .put("/:id",verifyToken,updateVideo)
  .delete("/:id",verifyToken,deleteVideo)
  .get("/trend",trend)
  .get("/random",random)
  .get("/subscribe",verifyToken,subscribed)
  .get("/trend",trend)
  .put("/view/:id",addView)
  .get("/tags",getResultByTag)
  .get("/search",getSearchResult)







export default router;