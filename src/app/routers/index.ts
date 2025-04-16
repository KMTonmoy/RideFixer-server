import express from "express";
import customerRouter from "../routers/customer.router";
import bikeRoutes from "../routers/bike.router";
 
const router = express.Router();

router.use("/customers", customerRouter);
router.use("/bikes", bikeRoutes);

export default router;
