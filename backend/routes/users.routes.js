import { Router } from "express";
import {
  getAllUsersHandler,
  createUserHandler,
  deleteUserByNameHandler,
} from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.get("/", getAllUsersHandler);
userRouter.post("/", createUserHandler);
userRouter.delete("/:_username", deleteUserByNameHandler);

export default userRouter;
