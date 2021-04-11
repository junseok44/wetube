import routes from "./routes";
import multer from "multer";

export const multerVideo = multer({dest:"myvideos/"});
export const uploadVideo = 
multerVideo.single("videoFile");

export const localMiddleWares = (req,res,next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id: 1
    }
    next();
}



