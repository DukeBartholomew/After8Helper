import { Router } from "express";
import {
  createHeadphoneHandler,
  deleteHeadphoneByNumberHandler,
  editHeadphoneByNumberHandler,
  getAllHeadphonesHandler,
} from "../controllers/headphones.controllers.js";

const headphoneRouter = Router();

headphoneRouter.get("/", getAllHeadphonesHandler);
headphoneRouter.post("/", createHeadphoneHandler);
headphoneRouter.delete("/:headphone_number", deleteHeadphoneByNumberHandler);
headphoneRouter.put("/:headphone_number", editHeadphoneByNumberHandler);

export default headphoneRouter;
