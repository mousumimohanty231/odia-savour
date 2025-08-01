import express from 'express';
import { addFood,listFood,removeFood} from '../controllers/foodControllers.js';
import multer from 'multer';

const foodRouter = express.Router();

//image storage configuration
const storage = multer.diskStorage({
    destination: "uploads" ,
    filename:(rer,file,cb)=>{
    
        return cb(null, `${Date.now()}${file.originalname}`);
    }
    
});

const upload = multer({storage:storage});

foodRouter.post("/add",upload.single("image"),addFood)

foodRouter.get("/list", listFood);

foodRouter.post("/remove", removeFood);



export default foodRouter;