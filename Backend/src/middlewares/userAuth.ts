import { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user.model";

config();

interface MyJwtPayload extends JwtPayload {
  userId: string;
}

interface AuthenticatedRequest extends Request {
  user?: any;
}

const userAuth = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      res.status(400).json({ message: "Unauthorized: Token not provided" });
      return;
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      res.status(500).json({ message: "JWT secret not configured" });
      return;
    }

    const decoded = jwt.verify(token, secret) as MyJwtPayload;

    if (!decoded || !decoded.userId) {
      res.status(400).json({ message: "Unauthorized: Invalid token" });
      return;
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    req.user = user;
    next(); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default userAuth;
