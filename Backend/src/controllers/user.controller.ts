import express, {Request, Response} from 'express';
import User from '../models/user.model';
import bcrypt from "bcryptjs"
import generateToken from '../lib/utils';
import cloudinary from '../lib/cloudinary';


export const signup = async (req : Request, res: Response)=> {
const { fullName , email, password } = req.body;

try {
      if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if(password.length < 6){
        return res.status(400).json({message : "password should be greater than 6"})
    }

    const userExist = await User.findOne({email});

    if(userExist){
        return res.status(400).json({message : "Email already exist"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
   
    const newUser = new User({
        email, 
        fullName, 
        password:hashPassword
    });
    
    if(newUser){
        generateToken(newUser._id, res)
          await newUser.save();
        console.log(hashPassword)

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
        res.status(400).json({message : "invalid user data"});
    }
    
} catch (error) {
    res.status(400).json({"message" : error});
}

}

export const signin = async (req : Request, res: Response)=> {
    const { email, password } = req.body;

    try {
            if(!email || !password){
                return res.status(400).json({message : "all fields are required"})
            }
            const userExist = await User.findOne({email});
            if(!userExist){
                return res.status(400).json({message : "user is not sign up ( sign up first ) "})
            }
        
            const comparePassword = await bcrypt.compare(password, userExist!.password);
            if(!comparePassword){
               return res.status(400).json({message : "incorrect password"});
            }

           const token = generateToken(userExist!._id, res);
            res.status(200).json({
                fullName : userExist?.fullName,
                email : userExist?.email, 
                token
            });
        } catch (error) {
        console.log(error)
    }
}

export const logout = (req : Request, res: Response):void=> {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "loged out successfully"});
    } catch (error) {
        res.status(500).json({message : "intenal server error"})
    }
}

export const updateProfile = async (req: Request, res: Response)=> {
    const { profilePic } = req.body;

    try {
         if (!profilePic) {
            return res.status(400).json({message : "invalid profile pic"});
         }
         //@ts-ignore
         const userId = req.user._id;

         const uploadPic = await cloudinary.uploader.upload(profilePic);
         const updateUser = await User.findByIdAndUpdate(userId, {
            profilePic : uploadPic.secure_url }, {new : true});

            res.status(200).json({updateUser});
         
    } catch (error) {
        console.log(error)
    }
}

export const checkUser = (req: Request, res: Response)=> {
    try {
        //@ts-ignore
        const user = req.user;
        res.status(400).json(user)
    } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error" });
    }
}