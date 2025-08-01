import express from 'express';
import cors from 'cors'
import  connectDB  from "./config/db.js";
import foodRouter from './routes/foodRoute.js';

//app config
const app = express();
const PORT = 4000

//middleware
app.use(cors());
app.use(express.json());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'));

app.get("/",(req, res) => {
    res.send("API Working");
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})

//