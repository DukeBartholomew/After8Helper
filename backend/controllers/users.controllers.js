import {
  getAllUsers,
  createUser,
  deleteUserByName,
  grantAccess,
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

// Define the grantAccessHandler controller method
async function grantAccessHandler(req, res) {
  const _username = req.body._username;
  const _password = req.body._password; // Assuming username and password are sent in the request body
  console.log(_username)
  

  try {
    const granted = await grantAccess(_username, _password);
    if (granted) {
      // Access granted
      res.status(200).json({ message: "Access granted" });
    } else {
      // Access denied
      // res.status(201).json({ message: "Invalid username or password" });
      console.log("Invalid Username or Password")
      res.status(200).json({message: "Access denied"});
    }
  } catch (error) {
    // Error occurred
    console.error("Error in grantAccessHandler:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export { getAllUsersHandler, createUserHandler, deleteUserByNameHandler, grantAccessHandler};
