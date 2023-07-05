import { queryPromise } from "../mysql/connect.js";
import { hash, compare } from "bcrypt";

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
  const newPassword = await hashUserPassword(_password);
  console.log("Hashed Password: ", newPassword);
  const query = `INSERT INTO users(_username, _password) VALUES(?, ?)`;
  try {
    const results = await queryPromise(query, [_username, newPassword]); // Pass newPassword instead of _password
    const user_id = results.insertId;
    return {
      user_id,
      _username,
      _password: newPassword, // Store the hashed password in the response
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

async function grantAccess(_username, _password) {
  const query = `SELECT * FROM users WHERE _username = ?`;
  try {
    const rows = await queryPromise(query, [_username]);
    if (rows.length === 0) {
      console.log("User not found");
      return false;
    }

    const user = rows[0];
    const isPasswordMatch = await compareUserPassword(_password, user._password);
    if (!isPasswordMatch) {
      console.log("Invalid password");
      return false;
    }

    // User found and password matches
    console.log("Found user!")
    return true;
  } catch (err) {
    console.log("Error in finding user:", err);
    return false;
  }
}

async function hashUserPassword(password) {
  return await hash(password, 15);
}

async function compareUserPassword(password, hashedPassword) {
  return await compare(password, hashedPassword);
}


export { getAllUsers, createUser, deleteUserByName, grantAccess };
