import express from "express";
import mongoose from "mongoose";

import PhoneData from "../models/phoneData.js";

const router = express.Router();

export const getPhones = async (req, res) => {
  try {
    const phones = await PhoneData.find();

    res.status(200).json(phones);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPhone = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PhoneData.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPhone = async (req, res) => {
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = req.body;

  const newPhoneData = new PhoneData({
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  });

  try {
    await newPhoneData.save();

    res.status(201).json(newPhoneData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePhone = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`There is no phone with id: ${id}`);

  const updatedPhone = {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
    _id: id,
  };

  await PhoneData.findByIdAndUpdate(id, updatedPhone, { new: true });

  res.json(updatedPhone);
};

export const deletePhone = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`There is no phone with id: ${id}`);

  await PhoneData.findByIdAndRemove(id);

  res.json({ message: "Phone deleted successfully." });
};

export default router;
