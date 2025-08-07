import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';
<<<<<<< Updated upstream
import cartRouter from './routes/cartRoute.js'; // ✅ Make sure this file exists
=======
import cartRouter from './routes/cartRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
>>>>>>> Stashed changes

const app = express();
const PORT = 4000;

// ✅ Middleware
app.use(cors());
app.use(express.json());
<<<<<<< Updated upstream
app.use("/images", express.static('uploads'));
=======


>>>>>>> Stashed changes

// ✅ API Endpoints
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});

// ✅ Connect to DB and Start Server
const startServer = async () => {
    try {
        await connectDB();
        console.log("✅ MongoDB Connected");

        app.listen(PORT, () => {
            console.log(`🚀 Server started on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ MongoDB connection error:", err.message);
        process.exit(1);
    }
};

startServer();
