import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

const connectDB = async()=>{
   await  mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected");
};
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/healths" , (req , res) =>{
    res.json({
        success: true,
        message: "server is running",
        data: null,
    });
})

app.listen(PORT , ()=>{
    console.log(`server is running on the port ${PORT}`);
})