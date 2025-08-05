import express from 'express';
<<<<<<< HEAD
import { addFood,listFood,removeFood} from '../controllers/foodControllers.js';
=======
import { addFood,listFood,removefood } from '../controllers/foodControllers.js';
>>>>>>> cdae027 (item added)
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
<<<<<<< HEAD

foodRouter.post("/remove", removeFood);

=======
foodRouter.post("/remove", removefood);
>>>>>>> cdae027 (item added)


export default foodRouter;