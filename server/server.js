import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import dotenv from "dotenv";
import userModel from '../models/users.js'; // Make sure the path is correct

dotenv.config({ path: "./server/.env" }); // Make sure the path is correct

 
const uri = "mongodb+srv://daghsnisaif:saif2002@goldenspoon.dmdnvmt.mongodb.net/?retryWrites=true&w=majority&appName=GoldenSpoon"
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // your frontend
  credentials: true,
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('GoldenSpoon API is running!'));

// MongoDB Connection
mongoose.connect(uri)
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Add this to your server.js
app.get('/getUser', async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users from DB' });
  }
});

// Error Handling Middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error!' });
});

// Start Server
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));