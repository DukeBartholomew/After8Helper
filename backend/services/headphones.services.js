import { queryPromise } from "../mysql/connect.js";

async function getAllHeadphones() {
  const query = `SELECT * FROM headphones`;
  try {
    const rows = await queryPromise(query);
    return rows;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function createHeadphone(headphone) {
  const { headphone_number, serial_number, two_cords, notes } = headphone;
  const query = `INSERT INTO headphones(headphone_number, serial_number, two_cords, notes) VALUES(?, ?, ?, ?)`;
  try {
    const results = await queryPromise(query, [
      headphone_number,
      serial_number,
      two_cords,
      notes,
    ]);
    return {
      headphone_number,
      serial_number,
      two_cords,
      notes,
    };
  } catch (err) {
    console.log("Error in createHeadphone:", err);
    return 0; // Return null or an appropriate value to indicate failure
  }
}

async function editHeadphoneByNumber(headphone_number, two_cords, notes) {
  const query = `UPDATE headphones SET two_cords = ?, notes = ? WHERE headphone_number = ?`;
  try {
    const results = await queryPromise(query, [
      two_cords,
      notes,
      headphone_number,
    ]);
    console.log(results);
    return results.affectedRows;
  } catch (err) {
    console.log("Error in editHeadphoneByNumber:", err);
    return 0; // Return 0 or an appropriate value to indicate failure
  }
}

async function deleteHeadphoneByNumber(headphone_number) {
  const query = `DELETE FROM headphones WHERE headphone_number = ?`;
  try {
    const results = await queryPromise(query, [headphone_number]);
    console.log(results); // Log the results object to the console for debugging
    return results.affectedRows;
  } catch (err) {
    console.log("Error in deleteHeadphoneByName:", err);
    return 0; // Return 0 or an appropriate value to indicate failure
  }
}

export {
  getAllHeadphones,
  createHeadphone,
  deleteHeadphoneByNumber,
  editHeadphoneByNumber,
};
