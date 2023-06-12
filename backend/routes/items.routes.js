import { Router } from "express";
import {
  getAllItemsHandler,
  createItemHandler,
  deleteItemByNameHandler,
} from "../controllers/items.controllers.js";

const itemRouter = Router();

itemRouter.get("/", getAllItemsHandler);
itemRouter.post("/", createItemHandler);
itemRouter.delete("/:item_name", deleteItemByNameHandler);

export default itemRouter;
