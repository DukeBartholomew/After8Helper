import { queryPromise } from "../mysql/connect.js";

async function createLaptop(laptop) {
  const { laptop_number, serial_number, model, status, notes } = laptop;
  const query = `INSERT INTO laptops (laptop_number, serial_number, model, status, notes) VALUES (?, ?, ?, ?, ?)`;

  try {
    const results = await queryPromise(query, [
       laptop_number,
       serial_number,
       model,
       status,
       notes
      ]);
    return {
      laptop_number,
      serial_number,
      model,
      status,
      notes,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getAllLaptops() {
    const query = `SELECT * FROM laptops`;
    try {
        const rows = await queryPromise(query);
        return rows;
      } catch (err) {
        console.log(err);
        return [];
      }
  }

  async function deleteLaptopByNumber(laptop_number) {
    const query = `DELETE FROM laptops WHERE laptop_number = ?`;
    try {
      const results = await queryPromise(query, [laptop_number]);
      console.log(results); // Log the results object to the console for debugging
      return results.affectedRows;
    } catch (err) {
      console.log("Error in deleteLaptopByNumber:", err);
      return 0; // Return 0 or an appropriate value to indicate failure
    }
  }

  async function editLaptop(laptop_number, status, notes) {
    const query = `UPDATE laptops SET status = ?, notes = ? WHERE laptop_number = ?`;
    const results = await queryPromise(query, [status, notes, laptop_number]);
    if (results && results.affectedRows !== undefined) {
      return results.affectedRows;
    } else {
      console.log("Error in editQuantity: Invalid result");
      return 0; // Return an appropriate value to indicate failure
    }
  }
export { getAllLaptops, createLaptop, deleteLaptopByNumber, editLaptop };
