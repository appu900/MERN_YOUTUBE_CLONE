import { createError } from "../error.js";
import User from "../models/User.js";

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



export const getUser = async (request, response) => {

  try {

     const user  = await User.findById(request.params.id);
     response.status(200).json(user);
    
  } catch (error) {
    next(error);
  }

};

export const subscribe = async (request, response) => {

     try {

      await User.findById(request.user.id,{
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

export const unsubscribe = async (request, response) => {
 
  try {


     await User.findById(request.user.id,{
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

export const like = async (request, response) => {};

export const dislike = async (request, response) => {};
 