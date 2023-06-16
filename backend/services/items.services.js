import { queryPromise } from "../mysql/connect.js";

async function getAllItems() {
  const query = `SELECT * FROM items`;
  try {
    const rows = await queryPromise(query);
    return rows;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function createItem(item) {
  const { item_name, quantity, notes } = item;
  const query = `INSERT INTO items(item_name, quantity, notes) VALUES(?, ?, ?)`;
  try {
    const results = await queryPromise(query, [
      item_name,
      quantity,
      notes,
    ]);
    const item_id = results.insertId;
    return {
      item_id,
      item_name,
      quantity,
      notes,
    };
  } catch (err) {
    console.log("Error in createItem:", err);
    return 0; // Return null or an appropriate value to indicate failure
  }
}

async function deleteItemByName(item_name) {
  const query = `DELETE FROM items WHERE item_name = ?`;
  try {
    const results = await queryPromise(query, [item_name]);
    console.log(results); // Log the results object to the console for debugging
    return results.affectedRows;
  } catch (err) {
    console.log("Error in deleteItemByName:", err);
    return 0; // Return 0 or an appropriate value to indicate failure
  }
}

async function editQuantity(item_name, quantity, notes) {
  const query = `UPDATE items SET quantity = ?, notes = ? WHERE item_name = ?`;
  const results = await queryPromise(query, [quantity, notes, item_name]);
  if (results && results.affectedRows !== undefined) {
    return results.affectedRows;
  } else {
    console.log("Error in editQuantity: Invalid result");
    return 0; // Return an appropriate value to indicate failure
  }
}


export { getAllItems, createItem, deleteItemByName, editQuantity };
