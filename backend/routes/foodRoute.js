import express from 'express';
<<<<<<< Updated upstream
import { addFood, listFood, removeFood } from '../controllers/foodControllers.js';
=======
import { addFood,listFood,removefood } from '../controllers/foodControllers.js';
>>>>>>> Stashed changes
import multer from 'multer';

const foodRouter = express.Router();

// ✅ Image storage configuration
const storage = multer.diskStorage({
<<<<<<< Updated upstream
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
=======
    destination: (req,file,cb)=>{cb(null,"uploads" )},
    filename:(rer,file,cb)=>{
    
        return cb(null,`${Date.now()}${file.originalname}`);
>>>>>>> Stashed changes
    }
});

const upload = multer({ storage: storage });

// ✅ Routes
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
<<<<<<< Updated upstream
foodRouter.post("/remove", removeFood);

export default foodRouter;
=======
foodRouter.post("/remove", removefood)


export default foodRouter;
>>>>>>> Stashed changes
