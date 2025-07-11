import express from "express";
import {checkUser, logout, signin, signup , updateProfile} from "../controllers/user.controller";
import userAuth from "../middlewares/userAuth";
const router = express.Router();

//@ts-ignore
router.post('/signup', signup);
//@ts-ignore
router.post('/signin', signin)

router.post('/logout', logout)
//@ts-ignore
router.put('/update-profile',userAuth, updateProfile)
//@ts-ignore
router.get('/check-user',userAuth, checkUser)

export default router;