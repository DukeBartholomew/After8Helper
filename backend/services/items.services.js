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
  const stringItem = item_name;
  const query = `DELETE FROM items WHERE item_name = ?`;
  try {
    const results = await queryPromise(query, [stringItem]);
    console.log(results); // Log the results object to the console for debugging
    return results.affectedRows;
  } catch (err) {
    console.log("Error in deleteItemByName:", err);
    return 0; // Return 0 or an appropriate value to indicate failure
  }
}

async function deleteItemById(item_id) {
  const query = 'DELETE FROM items WHERE item_id = ?';
  try{
    const results = await queryPromise(query, [item_id]);
    console.log(results);
    return results.affectedRows;
  } catch (err) {
    console.log("Error in deleteItemById: ", err);
    return 0;
  }
}

async function editQuantity(item_id, quantity, notes) {
  const query = `UPDATE items SET quantity = ?, notes = ? WHERE item_id = ?`;
  const results = await queryPromise(query, [quantity, notes, item_id]);
  if (results && results.affectedRows !== undefined) {
    return results.affectedRows;
  } else {
    console.log("Error in editQuantity: Invalid result");
    return 0; // Return an appropriate value to indicate failure
  }
}


export { getAllItems, createItem, deleteItemByName, editQuantity, deleteItemById};
