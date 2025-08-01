import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mousumimohanty231:mousumi231@cluster0.slaxn7m.mongodb.net/odia-savour').then(() => console.log("DB Connected Successfully"));


}

export default connectDB;