import {
  getAllHeadphones,
  createHeadphone,
  editHeadphoneNotesByNumber,
  deleteHeadphoneByNumber,
  editHeadphoneCordsByNumber,
} from "../services/headphones.services.js";

async function getAllHeadphonesHandler(req, res) {
  try {
    const headphones = await getAllHeadphones();
    console.log(headphones);
    res.status(200).json(headphones);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error });
  }
}

async function createHeadphoneHandler(req, res) {
  try {
    const newHeadphone = await createHeadphone(req.body);
    console.log(newHeadphone);
    res.status(201).json(newHeadphone);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

async function deleteHeadphoneByNumberHandler(req, res) {
  try {
    const results = await deleteHeadphoneByNumber(req.params.headphone_number);
    console.log(results);
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err });
  }
}

async function editHeadphoneNotesByNumberHandler(req, res) {
  try {
    const rowsUpdated = await editHeadphoneNotesByNumber(
      req.params.headphone_number,
      req.body.notes,
    );
    console.log(rowsUpdated);
    res.status(200).json(rowsUpdated);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error });
    }
}

async function editHeadphoneCordsByNumberHandler(req, res) {
  try {
    const rowsUpdated = await editHeadphoneCordsByNumber(
      req.params.headphone_number,
      req.body.two_cords,
    );
    console.log(rowsUpdated);
    res.status(200).json(rowsUpdated);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error });
    }
}

export {
  getAllHeadphonesHandler,
  createHeadphoneHandler,
  deleteHeadphoneByNumberHandler,
  editHeadphoneNotesByNumberHandler,
  editHeadphoneCordsByNumberHandler,
};
