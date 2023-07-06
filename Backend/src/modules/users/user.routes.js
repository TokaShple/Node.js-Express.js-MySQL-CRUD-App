import express from 'express';
import { addUser, deleteUser, getAllUsers,getUser,searchUser,updateUser } from './controllers/user.controllers.js';


const router = express.Router();

router.get("/getAllUsers",getAllUsers);
router.get("/searchUser",searchUser);
router.get("/getUser",getUser);
router.post("/addUser",addUser);
router.delete("/deleteUser",deleteUser);
router.put("/updateUser",updateUser);

export default router;
