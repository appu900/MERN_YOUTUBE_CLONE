import express from "express";
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, updateUser } from "../controllers/userController.js";
import { verifyToken } from "../verifyToken.js";




const router = express.Router();

//! update user
//! delete user
//! get user
//! subscribe user
//! unsubscribe user
//! like a video
//! dislike a video


router
   .put("/:id",verifyToken,updateUser)
   .delete("/:id",verifyToken,deleteUser)
   .get("/find/:id",getUser)
   .put("/sub/:id",verifyToken,subscribe)
   .put("/unsub/:id",verifyToken,unsubscribe)
   .put("/like/:videoId",verifyToken,like)
   .put("/dislike/:videoId",verifyToken,dislike)
   



export default router;