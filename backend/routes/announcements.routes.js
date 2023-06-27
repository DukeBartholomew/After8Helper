import { Router } from "express";
import {
  createAnnouncementHandler,
  getAnnouncementsHandler,
  deleteAnnouncementByIdHandler,
  editAnnouncementSitationHandler,
  editCompletedHandler,
  editUrgencyHandler,
} from "../controllers/announcements.controllers.js";

const announcementRouter = Router();

announcementRouter.get("/", getAnnouncementsHandler);
announcementRouter.post("/", createAnnouncementHandler);
announcementRouter.delete("/:announcement_id", deleteAnnouncementByIdHandler);
announcementRouter.put("/:announcement_id", editAnnouncementSitationHandler);
announcementRouter.put("/completed/:announcement_id", editCompletedHandler);
announcementRouter.put("/urgency/:announcement_id", editUrgencyHandler);

export default announcementRouter;
