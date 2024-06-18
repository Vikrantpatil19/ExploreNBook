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

import user from "./models/user.js";

app.post("/user", async (req, res) => {
  const { email, userName, userPhoto } = req.body;

  try {
    let existingUser = await user.findOne({ email });

    if (existingUser) {
      existingUser.isLoggedIn = true;
      await existingUser.save();

      res.json({
        success: true,
        message: "User logged in successfully",
        data: existingUser,
      });
    } else {
      const newUser = await user.create({
        email,
        userName,
        userPhoto,
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
    const users = await user.find();

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
