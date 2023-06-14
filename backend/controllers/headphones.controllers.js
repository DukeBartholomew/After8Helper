import {
  getAllHeadphones,
  createHeadphone,
  deleteHeadphoneByNumber,
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

export {
  getAllHeadphonesHandler,
  createHeadphoneHandler,
  deleteHeadphoneByNumberHandler,
};
