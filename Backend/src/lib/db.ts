import mongoose from "mongoose";


export async function connectToDb(){
    try {
  await mongoose.connect("mongodb+srv://abdulrafay:abdulrafay@projects.srwxpnd.mongodb.net/chat-appy?retryWrites=true&w=majority&appName=Projects");
  console.log('db connected');
} catch (error) {
  console.log(error)
}
}