
import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js"

export const addVideo = async(request,response,next) =>{

   const newVideo = new Video({userId:request.user.id,...request.body})

   try {

    const savedVideo = await newVideo.save();
    response.status(200).json({
        message:"successFull upload",
        savedVideo
    })
    
   } catch (error) {
      next(error)
   }

}


export const updateVideo = async(request,response,next) =>{

    try {

        const video = await Video.findById(request.params.id);
        if(!video) return next(createError(404,"video not found"))
        if(request.user.id === video.userId ){
            const updatedVideo = await Video.findByIdAndUpdate(request.params.id,{
                $set:request.body
            },{new:true})

            response.status(200).json({
                message:"video data update sucessfull",
                updatedVideo
            })
        } else{

            return next(createError(403,"you can not update this video"))
        }

        
    
    } catch (error) {
       next(error)
    }
}


export const deleteVideo = async(request,response,next) =>{
    try {


        const video = await Video.findById(request.params.id);
        if(!video) return next(createError(400,"video not found"));
        if(request.user.id === video.userId) {

            await Video.findByIdAndDelete(request.params.id)
            response.status(200).json({
                message:"video deleted sucessfull"
            })

        }else{
            return next(createError(403,"you can not deleted this video"))
        }
    
    } catch (error) {
       next(error)
    }
}

export const getVideo = async(request,response,next) =>{
    try {


        const video = await Video.findById(request.params.id);
        response.status(200).json(video)
    
    } catch (error) {
       next(error)
    }
}




// add view count for a watched video

export const addView = async(request,response,next) =>{
    try {
        await Video.findByIdAndUpdate(request.params.id,{
            $inc:{views:1}
        })

        response.status(200).json({message:"this view has updated"});   
        
    
    } catch (error) {
       next(error)
    }
}

export const trend = async(request,response,next) =>{
    try {


        const videos = await Video.find().sort({views:-1});
        response.status(200).json(videos);
    
    } catch (error) {
       next(error)
    }
}

export const random = async(request,response,next) =>{
    try {

        const video = await Video.aggregate([{$sample:{size:40}}])
        response.json({
            video
        })
        
    } catch (error) {
       next(error)
    }
}


export const subscribed = async(request,response,next) =>{
    try {


        const user = await User.findById(request.user.id);
        const subscribedChannels = user.subscribedUsers;


        const list = await Promise.all(
            subscribedChannels.map(channelId=>{
                return Video.find({userId:channelId})
            })
        );


        response.status(200).json(list.flat().sort( (a,b) => a.createdAt - b.createdAt));

        
    
    } catch (error) {
       next(error)
    }
}



//* search videos


export const getSearchResult = async(request,response,next) =>{


    const title = request.query.q;

    try {

        const videos = await Video.find(
            {title:{$regex:title,$options:"i"}}
        ).limit(40);

        response.status(200).json(videos);
        
    } catch (error) {
        next(error)
    }

}

export const getResultByTag = async(request,response,next) =>{

    
    const tags = request.query.tags.split(",");
    console.log(tags)

    try {

        const videos = await Video.find({tags:{$in:tags}}).limit(20);
        response.status(200).json(videos)
   
        
    } catch (error) {
        next(error)
    }

}