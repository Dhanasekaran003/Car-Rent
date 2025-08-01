import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors());

const PORT = process.env.PORT || 4300;

app.listen( PORT, () => {
      console.log(`server is running on Port:${PORT}`)
})