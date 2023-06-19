import {
  getAllItems,
  createItem,
  deleteItemByName,
  editQuantity,
  deleteItemById,
} from "../services/items.services.js";

async function getAllItemsHandler(req, res) {
  try {
    const items = await getAllItems();
    console.log(items);
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function createItemHandler(req, res) {
  try {
    const newItem = await createItem(req.body);
    console.log(newItem);
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

async function deleteItemByNameHandler(req, res) {
  try {
    const results = await deleteItemByName(req.params.item_name);
    console.log(results);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

async function deleteItemByIdHandler(req, res) {
  try {
    const results = await deleteItemById(req.params.item_id);
    console.log(results);
    res.status(200).json(results);
  }
  catch(err) {
    console.error(err);
    res.status(500).json({err: err});
  }
}

async function editQuantityHandler(req, res) {
  try {
    const rowsUpdated = await editQuantity(
      req.params.item_name,
      req.body.quantity,
      req.body.notes,
    );
    console.log(rowsUpdated);
    res.status(200).json(rowsUpdated);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

export {
  getAllItemsHandler,
  createItemHandler,
  deleteItemByNameHandler,
  editQuantityHandler,
  deleteItemByIdHandler,
};
