import express from "express"; 
import dotenv from "dotenv";
import userRoute from "./routes/user.route"
import messageRoute from "./routes/message.route"
import { connectToDb } from "./lib/db";
import cookieParser from 'cookie-parser'
import cors from "cors";

const app = express();
dotenv.config()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));

app.use(express.json());
app.use(cookieParser());


const Port = process.env.PORT;

app.use("/api/v1/auth", userRoute);
app.use("/api/v1/messages", messageRoute)

app.listen(Port, ()=> {
    console.log(`app is running on port ${Port}`)
    connectToDb();
})