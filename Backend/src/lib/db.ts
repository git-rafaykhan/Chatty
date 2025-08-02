import mongoose from "mongoose";


export async function connectToDb(){
    try {
  await mongoose.connect("");
  console.log('db connected');
} catch (error) {
  console.log(error)
}

}
