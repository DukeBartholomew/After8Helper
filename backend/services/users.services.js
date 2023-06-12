import { queryPromise } from "../mysql/connect.js";

async function getAllUsers() {
  const query = `SELECT * FROM users`;
  try {
    const rows = await queryPromise(query);
    return rows;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function createUser(user) {
  const { _username, _password } = user;
  const query = `INSERT INTO users(_username, _password) VALUES(?, ?)`;
  try {
    const results = await queryPromise(query, [_username, _password]);
    const user_id = results.insertId;
    return {
      user_id,
      _username,
      _password,
    };
  } catch (err) {
    console.log("Error in createUser:", err);
    return 0; // Return null or an appropriate value to indicate failure
  }
}

async function deleteUserByName(_username) {
  const query = `DELETE FROM users WHERE _username = ?`;
  try {
    const results = await queryPromise(query, [_username]);
    console.log(results); // Log the results object to the console for debugging
    return results.affectedRows;
  } catch (err) {
    console.log("Error in deleteUserByName:", err);
    return 0; // Return 0 or an appropriate value to indicate failure
  }
}



export { getAllUsers, createUser, deleteUserByName };
