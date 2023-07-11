import { Router } from "express";
import {
  getAllItemsHandler,
  createItemHandler,
  deleteItemByNameHandler,
  editQuantityHandler,
  deleteItemByIdHandler,
} from "../controllers/items.controllers.js";

const itemRouter = Router();

itemRouter.get("/", getAllItemsHandler);
itemRouter.post("/", createItemHandler);
itemRouter.delete("/:item_name", deleteItemByNameHandler);
itemRouter.delete("/id/:item_id", deleteItemByIdHandler);
itemRouter.put("/:item_id", editQuantityHandler);

export default itemRouter;
