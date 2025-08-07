import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import cartRouter from './routes/cartRoute.js'; // ✅ Make sure this file exists

const app = express();
const PORT = 4000;

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static('uploads'));

// ✅ API Endpoints
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);

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
