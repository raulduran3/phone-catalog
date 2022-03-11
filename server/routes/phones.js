import express from "express";

import {
  getPhones,
  getPhone,
  createPhone,
  updatePhone,
  deletePhone,
} from "../controllers/phones.js";

const router = express.Router();

router.get("/", getPhones);
router.post("/", createPhone);
router.get("/:id", getPhone);
router.patch("/:id", updatePhone);
router.delete("/:id", deletePhone);

export default router;
