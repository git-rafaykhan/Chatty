import mongoose from "mongoose";
import { config } from "dotenv";

config()

const url = process.env.MONGODB_URL;

export async function connectToDb(){
    try {
<<<<<<< HEAD
  await mongoose.connect(url!);
=======
  await mongoose.connect("");
>>>>>>> b32abc8f18c77fd05ce43bcbfc2cc5b663882ade
  console.log('db connected');
} catch (error) {
  console.log(error)
}

}
