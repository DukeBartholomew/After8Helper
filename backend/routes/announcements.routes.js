import { Router } from "express";
import {
  createAnnouncementHandler,
  getAnnouncementsHandler,
  deleteAnnouncementByIdHandler,
  editAnnouncementSitationHandler,
} from "../controllers/announcements.controllers.js";

const announcementRouter = Router();

announcementRouter.get("/", getAnnouncementsHandler);
announcementRouter.post("/", createAnnouncementHandler);
announcementRouter.delete("/:announcement_id", deleteAnnouncementByIdHandler);
announcementRouter.put("/:announcement_id", editAnnouncementSitationHandler);

export default announcementRouter;
