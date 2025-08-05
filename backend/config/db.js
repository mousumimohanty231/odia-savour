// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://mousumimohanty231:mousumi231@cluster0.slaxn7m.mongodb.net/odia-savour', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB connected successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1); // Stop the app if DB connection fails
//   }
// };

// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mousumimohanty231:mousumi231@cluster0.slaxn7m.mongodb.net/odia-savour') 
  // await mongoose.connect('mongodb://127.0.0.1:27017/odia-savour')
    .then(() => console.log("DB Connected Successfully"));
};

export default connectDB;

