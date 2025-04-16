import express from "express";
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
} from "../controllers/customer.controller";

const router = express.Router();

router.post("/", createCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);

export default router;
