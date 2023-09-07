import { response } from "express"


export const commentstest = (request,response) =>{
    response.json("hello from comment service")
}