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
   .delete("/:id",deleteUser)
   .get("/find/:id",getUser)
   .put("/sub/:id",subscribe)
   .put("/unsub/:id",unsubscribe)
   .put("/like/:videoId",like)
   .put("/dislike/:videoId",dislike)



export default router;