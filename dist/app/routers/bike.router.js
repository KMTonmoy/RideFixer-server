"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("../controllers/bike.controller");
const router = express_1.default.Router();
router.post("/", bike_controller_1.createBike);
router.get("/", bike_controller_1.getAllBikes);
router.get("/:id", bike_controller_1.getBikeById);
exports.default = router;
