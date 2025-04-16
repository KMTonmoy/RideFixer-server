import express from "express";
import customerRouter from "../routers/customer.router";
import bikeRoutes from "../routers/bike.router";
import serviceRoutes from "../routers/service.router";
 
const router = express.Router();

router.use("/customers", customerRouter);
router.use("/bikes", bikeRoutes);
router.use("/services", serviceRoutes);

export default router;
