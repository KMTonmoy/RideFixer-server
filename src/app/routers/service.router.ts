import express from "express";
import { completeService, createService, getAllServices, getPendingOrOverdueServices, getServiceById } from "../controllers/service.controller";

const router = express.Router();

router.post("/", createService);
router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.put("/:id/complete", completeService); 
router.get("/status", getPendingOrOverdueServices); 
export default router;
