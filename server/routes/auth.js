import express from "express";
import { commentstest } from "../controllers/commentController.js"
import { signin, signup } from "../controllers/authController.js";

const router = express.Router();


//* create a user
//* sign in
//* google authentication


router
   .post("/signup",signup)
   .post("/signin",signin)
//    .post("/google",)








export default router;