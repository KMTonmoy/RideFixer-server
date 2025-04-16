"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPendingOrOverdueServices = exports.completeService = exports.getServiceById = exports.getAllServices = exports.createService = void 0;
const service_service_1 = require("../services/service.service");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.ServiceService.createService(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            success: true,
            message: "Service record created successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: error.message || "Failed to create service record",
        });
    }
});
exports.createService = createService;
const getAllServices = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.ServiceService.getAllServices();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Service records fetched successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: error.message || "Failed to fetch service records",
        });
    }
});
exports.getAllServices = getAllServices;
const getServiceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield service_service_1.ServiceService.getServiceById(id);
        if (!result) {
            return (0, sendResponse_1.default)(res, {
                statusCode: 404,
                success: false,
                message: "Service record not found",
            });
        }
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Service record fetched successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: error.message || "Internal server error",
        });
    }
});
exports.getServiceById = getServiceById;
const completeService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { completionDate } = req.body;
        const completedAt = completionDate ? new Date(completionDate) : new Date();
        const result = yield service_service_1.ServiceService.completeService(id, completedAt);
        if (!result) {
            return (0, sendResponse_1.default)(res, {
                statusCode: 404,
                success: false,
                message: "Service record not found",
            });
        }
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Service marked as completed",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: error.message || "Internal server error",
        });
    }
});
exports.completeService = completeService;
const getPendingOrOverdueServices = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const result = yield service_service_1.ServiceService.getPendingOrOverdueServices(sevenDaysAgo);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Overdue or pending services fetched successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: error.message || "Internal server error",
        });
    }
});
exports.getPendingOrOverdueServices = getPendingOrOverdueServices;
