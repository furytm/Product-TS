import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/prouct.routes'
import mongoose from "mongoose";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded());

app.use(express.json())

app.use("/api/v1", productRoutes);
mongoose
    .connect(process.env.DATABASE_URL as string)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connected'))




app.listen(port, () => {
    console.log("Server running on port 3000")
}

);