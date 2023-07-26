import {
  createClothingItem,
  deleteClotheById,
  editClotheItem,
  getAllClothes,
} from "../services/clothing.services.js";

async function getAllClothesHandler(req, res) {
  try {
    const clothes = await getAllClothes();
    console.log(clothes);
    res.status(200).json(clothes);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function createClothingItemHandler(req, res) {
  try {
    const newCLothe = await createClothingItem(req.body);
    console.log(newCLothe);
    res.status(201).json(newCLothe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

async function deleteClotheByIdHandler(req, res) {
  try {
    const results = await deleteClotheById(req.params.clothing_id);
    console.log(results);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

async function editClotheItemHandler(req, res) {
  try {
    const results = await editClotheItem(
      req.params.clothing_id,
      req.body.quantity
    );
    console.log(results);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

export {
  getAllClothesHandler,
  createClothingItemHandler,
  deleteClotheByIdHandler,
  editClotheItemHandler,
};
