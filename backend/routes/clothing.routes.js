import { Router } from "express";
import {
  createClothingItemHandler,
  deleteClotheByIdHandler,
  editClotheItemHandler,
  getAllClothesHandler,
} from "../controllers/clothing.controllers.js";

const clothingRouter = Router();

clothingRouter.get("/", getAllClothesHandler);
clothingRouter.post("/", createClothingItemHandler);
clothingRouter.delete("/:clothing_id", deleteClotheByIdHandler);
clothingRouter.put("/:clothing_id", editClotheItemHandler);

export default clothingRouter;
