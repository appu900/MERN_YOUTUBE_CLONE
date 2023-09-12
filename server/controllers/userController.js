import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const updateUser = async (request, response) => {
  if (request.params.id == request.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(request.params.id, {
        $set: request.body,
      },{new:true});
      response.status(200).json({updatedUser})
    } catch (error) {
      next(error);
    }
  } else {
      response.status(401).json({
        message:"please use your account"
      })
  }
};




export const deleteUser = async (request, response) => {
   if(request.params.id == request.user.id){

    try {

      const deletedUser = await User.findByIdAndDelete(request.params.id);
      response.status(200).json({
        message:"user deleted",
        deletedUser
      })
      
    } catch (error) {
       next(error)
    }

   }
   else{
    response.status(400).json({
      message:"can not delete this account"
    })
   }
};



export const getUser = async (request, response,next) => {

  try {

     const user  = await User.findById(request.params.id);
     response.status(200).json(user);
    
  } catch (error) {
    next(error);
  }

};

export const subscribe = async (request, response,next) => {

     try {

      await User.findByIdAndUpdate(request.user.id,{
        $push:{subscribedUsers:request.params.id},
      })

      await User.findByIdAndUpdate(request.params.id,{
         $inc:{subscribers:1},
      })

      response.status(200).json({
        message:"subscription addded"
      })
      
     } catch (error) {
        next(error)
     }

};

export const unsubscribe = async (request, response,next) => {
 
  try {


     await User.findByIdAndUpdate(request.user.id,{
      $pull:{subscribedUsers:request.params.id}
     });

     await User.findByIdAndUpdate(request.params.id,{
      $inc:{subscribers:-1},
     })

     response.json({
      message:"unsubscribed channal done"
     })
    
  } catch (error) {
      next(error)
  }

};

export const like = async (request, response,next) => {

  const id = request.user.id;
  const videoId = request.params.videoId;
  console.log(id);

  try { 

    await Video.findByIdAndUpdate(videoId,{
      $addToSet:{likes:id},
      $pull:{dislikes:id}
    })

    response.status(200).json("you liked this video")
    
  } catch (error) {
     next(error)
  }
};

export const dislike = async (request, response,next) => {

  const id = request.user.id;
  const videoId = request.params.videoId;

  try {


    await Video.findByIdAndUpdate(videoId,{
      $addToSet:{dislikes:id},
      $pull:{likes:id}
    })


    response.status(200).json({message:"disliked this video"})

    
    
  } catch (error) {
    next(error)
  }
};
 