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
exports.getBikeById = exports.getAllBikes = exports.createBike = void 0;
const bike_service_1 = require("../services/bike.service");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const createBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.BikeService.createBike(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            success: true,
            message: "Bike added successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: error.message || "Something went wrong",
        });
    }
});
exports.createBike = createBike;
const getAllBikes = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.BikeService.getAllBikes();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Bikes fetched successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
});
exports.getAllBikes = getAllBikes;
const getBikeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield bike_service_1.BikeService.getBikeById(id);
        if (!result) {
            return (0, sendResponse_1.default)(res, {
                statusCode: 404,
                success: false,
                message: "Bike not found",
            });
        }
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Bike fetched successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
});
exports.getBikeById = getBikeById;
