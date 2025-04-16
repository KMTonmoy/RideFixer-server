"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    const responseBody = {
        success: data.success,
        message: data.message,
    };
    if (data.data !== undefined) {
        responseBody.data = data.data;
    }
    res.status(data.statusCode).json(responseBody);
};
exports.default = sendResponse;
