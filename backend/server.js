import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import foodRouter from './routes/foodRoute.js';

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());
<<<<<<< HEAD

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/cart", cartRouter);

app.get("/",(req, res) => {
=======
app.use("/images", express.static('uploads'));
app.get("/", (req, res) => {
>>>>>>> cdae027 (item added)
    res.send("API Working");
});

// Connect DB and start server
const startServer = async () => {
  try {
    await connectDB(); // Wait for DB connection
    console.log("✅ MongoDB Connected");
    
    app.use("/api/food", foodRouter);

    app.listen(PORT, () => {
      console.log(`🚀 Server started on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Stop the app
  }
};

startServer();
