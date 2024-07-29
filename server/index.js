import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Database connected");
};
connectDB();

app.get("/healths", (req, res) => {
  res.json({
    success: true,
    message: "server is running",
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});

// Login API

import User from "./models/User.js";

app.post("/user", async (req, res) => {
  const { email, userName, userPhoto } = req.body;

  try {
    let existingUser = await User.findOne({ email });

    if (existingUser) {
      existingUser.isLoggedIn = true;
      await existingUser.save();

      res.json({
        success: true,
        message: "User logged in successfully",
        data: existingUser,
      });
    } else {
      const newUser = await User.create({
        email,
        userName,
        userPhoto,
        isLoggedIn: true
      });

      res.json({
        success: true,
        message: "New user created and logged in successfully",
        data: newUser,
      });
    }
  } catch (error) {
    console.error("Error creating or updating user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
});

app.get("/user", async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      message: "User fetched successfully",
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
});

//Logout API

app.post("/user/logout" , async(req , res) =>{
  const {email} = req.body;

  try{

  let user = await User.findOne({ email });

  if(user) {
    user.isLoggedIn = false;
    await user.save();

    res.json({
      success: true,
      message: "user logged out successfully",
      data: user
    });
  } else {
    res.status(404).json({
      success: false,
      message: "user not found",
      data:null
    });
  } 
  }catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
});

// Admin Api

import Admin from "./models/Admin.js";

app.post("/admin" , async (req , res) =>{
  const { email , password } = req.body;
  const admin = await Admin.create({ email , password});

  res.json({
    success: true,
    message: "Your Message has been sent to the admin",
    data: admin
  })
});

//Booking Api


app.post("/booking", async (req, res) => {
  const { name, phone, gender, seat, email } = req.body;

  try {
    const book = await Booking.create({ name, phone, email });
    res.json({
      success: true,
      message: "Details added Successfully",
      data: book
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: "Error adding booking",
      error: error.message
    });
  }
});

app.get("/booking", async (req, res) => {
  try {
    const book = await Booking.find();
    res.json({
      success: true,
      message: "Booking Details fetched successfully",
      data: book
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: "Error fetching bookings",
      error: error.message
    });
  }
});