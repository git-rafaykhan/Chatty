import { Request,Response } from "express"
import User from "../models/user.model";
import Message from "../models/message.model";
import cloudinary from "../lib/cloudinary";
import { getReceiverSocketId, io } from "../lib/socket";


export const getUsersForSide = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user._id;

    const users = await User.find({ _id: { $ne: userId } }).select("-password");

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error finding users for sidebar" });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = (req as any).user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error: any) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const sendMessages = async (req: Request, res: Response)=> {
     try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = (req as any).user._id;

    let imageUrl;
    if (image) {
      // Upload base64 image to cloudinary
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error:any) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }

}