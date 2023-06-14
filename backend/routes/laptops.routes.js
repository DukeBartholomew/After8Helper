import { Router } from "express";
import {
  createLaptopHandler,
  getAllLaptopsHandler,
  deleteLaptopByNumberHandler,
  editLaptopHandler,
} from "../controllers/laptops.controllers.js";

const laptopRouter = Router();

laptopRouter.get("/", getAllLaptopsHandler);
laptopRouter.post("/", createLaptopHandler);
laptopRouter.delete("/:laptop_number", deleteLaptopByNumberHandler);
laptopRouter.put("/:laptop_number", editLaptopHandler);

export default laptopRouter;
