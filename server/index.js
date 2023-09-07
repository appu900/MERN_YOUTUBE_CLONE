import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import videoRouter from "./routes/video.js";
import commentRouter from "./routes/comments.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

connectToDatabase().catch((error) => console.log(error));
async function connectToDatabase() {
  await mongoose.connect(
    "mongodb+srv://appudq670:jarvis7735@cluster0.phvznk8.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("database connected");
}

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/video",videoRouter);
app.use("/api/comment",commentRouter);

app.use((err,req,res,next)=>{
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    sucess:false,
    status:status,
    message:message
  })

})


app.listen(5000, () => {
  console.log("server is live");
});
