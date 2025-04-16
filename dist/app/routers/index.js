"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_router_1 = __importDefault(require("../routers/customer.router"));
const bike_router_1 = __importDefault(require("../routers/bike.router"));
const router = express_1.default.Router();
router.use("/customers", customer_router_1.default);
router.use("/bikes", bike_router_1.default);
exports.default = router;
