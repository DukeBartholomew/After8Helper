import { Router } from "express";
import {
  createHeadphoneHandler,
  deleteHeadphoneByNumberHandler,
  getAllHeadphonesHandler,
} from "../controllers/headphones.controllers.js";

const headphoneRouter = Router();

headphoneRouter.get("/", getAllHeadphonesHandler);
headphoneRouter.post("/", createHeadphoneHandler);
headphoneRouter.delete("/:headphone_number", deleteHeadphoneByNumberHandler);

export default headphoneRouter;
