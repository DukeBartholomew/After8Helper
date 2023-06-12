import {
  getAllUsers,
  createUser,
  deleteUserByName,
} from "../services/users.services.js";

async function getAllUsersHandler(req, res) {
  try {
    const users = await getAllUsers();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function createUserHandler(req, res) {
  try {
    const newUser = await createUser(req.body);
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

async function deleteUserByNameHandler(req, res) {
  try {
    const results = await deleteUserByName(req.params._username);
    console.log(results);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

export { getAllUsersHandler, createUserHandler, deleteUserByNameHandler };
