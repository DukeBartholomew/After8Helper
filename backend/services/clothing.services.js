import { queryPromise } from "../mysql/connect.js";

async function getAllClothes() {
  const query = `SELECT * FROM clothing`;
  try {
    const rows = await queryPromise(query);
    return rows;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function createClothingItem(clothe) {
  const { article, quantity } = clothe;
  const query = `INSERT INTO clothing(article, quantity) VALUES(?, ?)`;
  try {
    const results = await queryPromise(query, [article, quantity]);
    const clothing_id = results.insertId;
    return {
      clothing_id,
      article,
      quantity,
    };
  } catch (err) {
    console.log("Error in createItem:", err);
    return 0; // Return null or an appropriate value to indicate failure
  }
}

async function deleteClotheById(clothing_id) {
  const query = "DELETE FROM clothing WHERE clothing_id = ?";
  try {
    const results = await queryPromise(query, [clothing_id]);
    console.log(results);
    return results.affectedRows;
  } catch (err) {
    console.log("Error in deleteClotheById: ", err);
    return 0;
  }
}

async function editClotheItem(clothing_id, quantity) {
    const query = `UPDATE clothing SET quantity = ? WHERE clothing_id = ?`;
    try{
        const results = await queryPromise(query, [quantity, clothing_id]);
        console.log(results);
        return results.clothing_id;
    } catch (err) {
        console.log("Error in editClotheItem:", err);
        return 0;
    }
}

export { getAllClothes, createClothingItem, deleteClotheById, editClotheItem };
