"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("../controllers/service.controller");
const router = express_1.default.Router();
router.post("/", service_controller_1.createService);
router.get("/", service_controller_1.getAllServices);
router.get("/:id", service_controller_1.getServiceById);
router.put("/:id/complete", service_controller_1.completeService);
router.get("/status", service_controller_1.getPendingOrOverdueServices);
exports.default = router;
