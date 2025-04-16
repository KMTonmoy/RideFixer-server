import express from "express";
import { createBike } from "../controllers/bike.controller";

const router = express.Router();

router.post("/", createBike);

export default router;
