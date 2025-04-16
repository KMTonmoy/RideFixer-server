import express from "express";
import { createBike, getAllBikes, getBikeById } from "../controllers/bike.controller";

const router = express.Router();

router.post("/", createBike);
router.get("/", getAllBikes);
router.get("/:id", getBikeById);


export default router;
