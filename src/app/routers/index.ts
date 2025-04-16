import express from "express";
import customerRouter from "../routers/customer.router";

const router = express.Router();

router.use("/customers", customerRouter);

export default router;
