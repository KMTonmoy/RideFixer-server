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
exports.deleteCustomer = exports.updateCustomer = exports.getCustomerById = exports.getAllCustomers = exports.createCustomer = void 0;
const customer_service_1 = require("../services/customer.service");
const sendResponse_1 = __importDefault(require("../utils/sendResponse"));
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const result = yield customer_service_1.CustomerService.createCustomer(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: 201,
            success: true,
            message: "✅ Customer created successfully!",
            data: result,
        });
    }
    catch (error) {
        let statusCode = 500;
        let message = "💥 Oops! Something went wrong.";
        if (error.code === "P2002" && ((_b = (_a = error.meta) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.includes("email"))) {
            statusCode = 400;
            message = "📧 This email is already registered. Try a different one.";
        }
        else if ((_c = error.message) === null || _c === void 0 ? void 0 : _c.includes("Validation")) {
            statusCode = 400;
            message = `⚠️ Validation Error: ${error.message}`;
        }
        else if (error.message) {
            message = `❗ ${error.message}`;
        }
        (0, sendResponse_1.default)(res, {
            statusCode,
            success: false,
            message,
        });
    }
});
exports.createCustomer = createCustomer;
const getAllCustomers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.CustomerService.getAllCustomers();
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "📦 Customers fetched successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            statusCode: 500,
            success: false,
            message: `💥 Failed to fetch customers: ${error.message || "Internal server error"}`,
        });
    }
});
exports.getAllCustomers = getAllCustomers;
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield customer_service_1.CustomerService.getCustomerById(id);
        if (!result) {
            return (0, sendResponse_1.default)(res, {
                statusCode: 404,
                success: false,
                message: "Customer not found",
            });
        }
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Customer fetched successfully",
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
exports.getCustomerById = getCustomerById;
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const payload = req.body;
        const existingCustomer = yield customer_service_1.CustomerService.getCustomerById(id);
        if (!existingCustomer) {
            return (0, sendResponse_1.default)(res, {
                statusCode: 404,
                success: false,
                message: "Customer not found",
            });
        }
        const updatedCustomer = yield customer_service_1.CustomerService.updateCustomer(id, payload);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Customer updated successfully",
            data: updatedCustomer,
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
exports.updateCustomer = updateCustomer;
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const existingCustomer = yield customer_service_1.CustomerService.getCustomerById(id);
        if (!existingCustomer) {
            return (0, sendResponse_1.default)(res, {
                statusCode: 404,
                success: false,
                message: "Customer not found",
            });
        }
        yield customer_service_1.CustomerService.deleteCustomer(id);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: "Customer deleted successfully",
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
exports.deleteCustomer = deleteCustomer;
