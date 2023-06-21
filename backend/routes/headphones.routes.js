import { Router } from "express";
import {
  createHeadphoneHandler,
  deleteHeadphoneByNumberHandler,
  editHeadphoneNotesByNumberHandler,
  getAllHeadphonesHandler,
  editHeadphoneCordsByNumberHandler,
} from "../controllers/headphones.controllers.js";

const headphoneRouter = Router();

headphoneRouter.get("/", getAllHeadphonesHandler);
headphoneRouter.post("/", createHeadphoneHandler);
headphoneRouter.delete("/:headphone_number", deleteHeadphoneByNumberHandler);
headphoneRouter.put("/:headphone_number", editHeadphoneNotesByNumberHandler);
headphoneRouter.put("/cords/:headphone_number", editHeadphoneCordsByNumberHandler);

export default headphoneRouter;
