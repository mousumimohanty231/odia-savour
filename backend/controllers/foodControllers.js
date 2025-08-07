import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// ✅ Add Food Item
const addFood = async (req, res) => {
    try {
        let image_filename = req.file?.filename || null;

        if (!req.body.name || !req.body.price || !req.body.category || !image_filename) {
            return res.json({ success: false, message: "All fields are required" });
        }

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: "Food item added successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding food item" });
    }
};

// ✅ Get All Food Items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching food items" });
    }
}
//remove food item
<<<<<<< HEAD
const removeFood= async(req, res) => {
=======
const removefood= async(req, res) => {
>>>>>>> cdae027 (item added)
    try {
        const food= await foodModel.findById(req.body.id);
        fs.unlinkSync(`uploads/${food.image}`,()=>{}); 
   
        await foodModel.findByIdAndDelete(req.body.id);

        res.json({ success: true, message: "Food item removed successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing food item" });
    }
}

<<<<<<< HEAD
export {addFood,listFood, removeFood};
=======
 export {addFood,listFood,removefood};
>>>>>>> cdae027 (item added)
