import { queryPromise } from "../mysql/connect.js";

async function getAnnouncements() {
  const query = `SELECT * FROM announcements`;
  try {
    const rows = await queryPromise(query);
    return rows;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function createAnnouncement(announcement) {
  const { announcement_id, topic, situation, end_result, completed, urgency } =
    announcement;
  const query = `INSERT INTO announcements(topic, situation, end_result, urgency) VALUES(?, ?, ?, ?)`;
  try {
    const results = await queryPromise(query, [
      topic,
      situation,
      end_result,
      urgency,
    ]);
    return {
      announcement_id,
      topic,
      situation,
      end_result,
      completed,
      urgency,
    };
  } catch (err) {
    console.log("Error in createAnnouncement:", err);
    return 0; // Return null or an appropriate value to indicate failure
  }
}

async function deleteAnnouncementById(announcement_id) {
  const query = `DELETE FROM announcements WHERE announcement_id = ?`;
  try {
    const results = await queryPromise(query, [announcement_id]);
    console.log(results); // Log the results object to the console for debugging
    return results.affectedRows;
  } catch (err) {
    console.log("Error in deleteAnnouncementById:", err);
    return 0; // Return 0 or an appropriate value to indicate failure
  }
}

async function editAnnouncementSituation(announcement_id, situation) {
  const query = `UPDATE announcements SET situation = ? WHERE announcement_id = ?`;
  try {
    const results = await queryPromise(query, [situation, announcement_id]);
    return results.affectedRows;
  } catch (err) {
    console.log("Error in editAnnouncementSitation: ", err);
    return 0;
  }
}

async function editCompleted(announcement_id, completed) {
  const query = `UPDATE announcements SET completed = ? WHERE announcement_id = ?`;
  try {
    const results = await queryPromise(query, [completed, announcement_id]);
    return results.affectedRows;
  } catch(err) {
    console.log("Error in editCompleted: ", err);
    return 0;
  }
}

async function editUrgency(announcement_id, urgency) {
  const query = `UPDATE announcements SET urgency = ? WHERE announcement_id = ?`;
  try{
    const results = await queryPromise(query, [urgency, announcement_id]);
    return results.affectedRows;
  } catch(err) {
    console.log("Error in editUrgency: ", err);
    return 0;
  }
}

export {
  getAnnouncements,
  createAnnouncement,
  deleteAnnouncementById,
  editAnnouncementSituation,
  editCompleted,
  editUrgency,
};
