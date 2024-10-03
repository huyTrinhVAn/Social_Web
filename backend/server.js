import express from "express";
import authRoutes from "./routes/auth.routes.js";  // Correct path
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";


// Middleware to handle JSON
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json()); // tp parse req.body
app.use(express.urlencoded({ extended: true })) // to parse form data encoded
// Use the auth routes at the path "/api/auth"
app.use("/api/auth", authRoutes);

// Start the server on port 8000
app.listen(PORT, () => {
    console.log(`Sever is running on ${PORT}`);
    connectMongoDB();
});
