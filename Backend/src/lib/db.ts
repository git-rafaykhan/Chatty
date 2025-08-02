import mongoose from "mongoose";
import { config } from "dotenv";

config()

const url = process.env.MONGODB_URL;

export async function connectToDb(){
    try {
  await mongoose.connect(url!);
  console.log('db connected');
} catch (error) {
  console.log(error)
}

}
