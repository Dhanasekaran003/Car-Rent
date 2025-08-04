import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./Config/db.config.js";
import authRoutes from './Routes/auth.route.js'

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const PORT = process.env.PORT;

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
      connectDB();
      console.log(`server is running on Port:${PORT}`)
});
