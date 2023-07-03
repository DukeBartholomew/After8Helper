import { Router } from "express";
import {
  getAllUsersHandler,
  createUserHandler,
  deleteUserByNameHandler,
  grantAccessHandler,
} from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.get("/", getAllUsersHandler);
userRouter.post("/", createUserHandler);
userRouter.delete("/:_username", deleteUserByNameHandler);
userRouter.post('/grant-access', grantAccessHandler);


export default userRouter;
