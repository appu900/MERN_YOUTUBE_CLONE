const express = require("express");


const app = express();


app.get('/',(request,response)=>{
    response.json({
        message:"server is working"
    })
})

app.listen(5000,()=>{
    console.log("server is live")
})



//mongodb+srv://appudq670:jarvis7735@cluster0.phvznk8.mongodb.net/?retryWrites=true&w=majority