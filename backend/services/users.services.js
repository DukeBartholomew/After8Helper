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
      const results = await queryPromise.query(query, [_username, _password]);
      return {
        user_id: results[0].insertId,
        _username,
        _password,
      };
    }
   catch (err) {
    console.log("Error in createUser:", err);
    return 0; // Return null or an appropriate value to indicate failure
  }
}



export { getAllUsers, createUser };
