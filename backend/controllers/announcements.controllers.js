import {
  getAnnouncements,
  createAnnouncement,
  deleteAnnouncementById,
  editAnnouncementSituation,
} from "../services/announcements.services.js";

async function getAnnouncementsHandler(req, res) {
  try {
    const announcements = await getAnnouncements();
    console.log(announcements);
    res.status(200).json(announcements);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function createAnnouncementHandler(req, res) {
  try {
    const newAnnouncement = await createAnnouncement(req.body);
    console.log(newAnnouncement);
    res.status(201).json(newAnnouncement);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

async function deleteAnnouncementByIdHandler(req, res) {
  try {
    const results = await deleteAnnouncementById(req.params.announcement_id);
    console.log(results);
    res.status(201).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}

async function editAnnouncementSitationHandler(req, res) {
  try {
    const newAnnouncement = await editAnnouncementSituation(
      req.params.announcement_id,
      req.body.situation
    );
    console.log(newAnnouncement);
    res.status(201).json(newAnnouncement);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
}

export {
  getAnnouncementsHandler,
  createAnnouncementHandler,
  deleteAnnouncementByIdHandler,
  editAnnouncementSitationHandler,
};
