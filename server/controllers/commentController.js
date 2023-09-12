import { createError } from "../error.js";
import Comments from "../models/Comments.js";
import Video from "../models/Video.js";



export const addComment = async (request, response, next) => {
  const newComment = new Comments({ ...request.body, userId: request.user.id });

  try {
    const savedComment = await newComment.save();
    response.status(200).json({ message: "comment added to video" });
  } catch (error) {
    next(error);
  }
};



export const deleteComment = async (request, response, next) => {
  try {
    const comment = await Comments.findById(request.params.id);
    const video = await Video.findById(request.params.id);
    if (
      request.user.id === comment.userId ||
      request.user.id === video.userId
    ) {
      await Comments.findByIdAndDelete(request.params.id);
      response.status(200).json({ message: "comment deleted" });
    } else {
      return next(createError(403, "you can not delete this comment"));
    }
  } catch (error) {
    next(error);
  }
};




export const getComments = async (request, response, next) => {
  try {
    const comments = await Comments.find({ videoId: request.params.videoId });
    response.status(200).json(comments)
  } catch (error) {
    next(error);
  }
};
