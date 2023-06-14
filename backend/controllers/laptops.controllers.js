import {
  createLaptop,
  getAllLaptops,
  deleteLaptopByNumber,
  editLaptop,
} from "../services/laptops.services.js";

async function createLaptopHandler(req, res) {
  try {
    const newLaptop = await createLaptop(req.body);
    console.log(newLaptop);
    res.status(201).json(newLaptop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function getAllLaptopsHandler(req, res) {
  try {
    const laptops = await getAllLaptops();
    console.log(laptops);
    res.status(200).json(laptops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

async function deleteLaptopByNumberHandler(req, res) {
  try {
    const results = await deleteLaptopByNumber(req.params.laptop_number);
    console.log(results);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

async function editLaptopHandler(req, res) {
    try {
      const rowsUpdated = await editLaptop(
        req.params.laptop_number,
        req.body.status,
        req.body.notes
      );
      console.log(rowsUpdated);
      res.status(200).json(rowsUpdated);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error });
    }
  }

export {
  createLaptopHandler,
  getAllLaptopsHandler,
  deleteLaptopByNumberHandler,
  editLaptopHandler,
};
