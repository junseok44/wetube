import routes from "../routes";
import Video from "../models/Video";
import multer from "multer";


export const home = async(req,res) => {
    try{
        const videos = await Video.find({});
        res.render("home", {pageTitle : "HOME", videos:videos});
    } catch(error) {
        console.log(error);
        res.render("home", {pageTitle : "HOME", videos:[]});
    }
}
export const search = (req,res) => {
    //const {query : { term : searchingBy }} = req;
    const searchingBy = req.query.term
    // term = req.query.term
    res.render("Search", {pageTitle : "search",searchingBy, videos}); } // searchingBy : searchingBy
export const videos1 =  (req,res) => res.render(`videos`, {pageTitle : "videos"});

export const getUpload = (req,res) => res.render(`upload`, {pageTitle : "upload"});

export const postUpload = async(req,res) => {
    const {
        body : {title, description},
        file
    } = req; 
    console.log(file);
    console.log(title);
    /*const newVideo = await Video.create({
        fileUrl: file,
        title,
        description
    }); 
    console.log(newVideo) 
    //TO do : upload and save
    res.redirect(`/videos${routes.videoDetail(newVideo.id)}`) */
}

export const videoDetail = (req,res) => res.render(`video-detail`, {pageTitle : "video_detail"});
export const editVideo = (req,res) => res.render(`edit video`, {pageTitle : "edit video"});
export const deleteVideo = (req,res) => res.render(`delete video`, {pageTitle : "delete video"});
