import { request } from "express";
import  Jwt  from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (request,response,next) =>{

    const token = request.cookies.access_token;
    if(!token) return next(createError(401,"user not authorized"));

    Jwt.verify(token,process.env.SECRETE_KEY,(err,user)=>{
        if(err){
            return next(createError(403,"invalid token login again"));
        }

        request.user = user;
        next();
    });


}