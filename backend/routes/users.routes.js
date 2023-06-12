import { Router } from "express";
import {
  getAllUsersHandler,
  createUserHandler,
} from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.get("/", getAllUsersHandler);
userRouter.post("/", createUserHandler);

export default userRouter;
