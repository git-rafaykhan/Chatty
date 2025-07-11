import { Router } from 'express';
import userAuth from '../middlewares/userAuth';
import { getUsersForSide, getMessages, sendMessages } from '../controllers/message.controller';

const router = Router();
router.get("/users", userAuth, getUsersForSide);
router.get("/:id",userAuth, getMessages);

router.post("/send/:id", userAuth, sendMessages)

export default router;