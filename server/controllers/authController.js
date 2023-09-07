import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

// service for signup

export const signup = async (request, response,next) => {
  try {
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(request.body.password,salt);
    const newUser =  new User({...request.body,password:hash});

    await newUser.save();
    response.status(200).json({message:"user has been created"})
       
  } catch (error) {

    next(createError(404,"All fields are required !"));
     
  }
};

// service for signin

export const signin = async(request,response,next)=>{
    try {

        const user = await User.findOne({name:request.body.name})
        if(!user) return next(createError(404,"user not found"));

        const isCorrect = bcrypt.compareSync(request.body.password,user.password);
        if(!isCorrect) return next(createError(404,"wrong credentials"));
         
        const{password,...others} = user._doc;

        const token = jwt.sign({id:user._id},process.env.SECRETE_KEY);
        response.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json({others})
        
    } catch (error) {

        next(error);
        
    }
}
