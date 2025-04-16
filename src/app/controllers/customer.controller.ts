import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";
import sendResponse from "../utils/sendResponse";

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const result = await CustomerService.createCustomer(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "✅ Customer created successfully!",
      data: result,
    });
  } catch (error: any) {
    let statusCode = 500;
    let message = "💥 Oops! Something went wrong.";

    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      statusCode = 400;
      message = "📧 This email is already registered. Try a different one.";
    } else if (error.message?.includes("Validation")) {
      statusCode = 400;
      message = `⚠️ Validation Error: ${error.message}`;
    } else if (error.message) {
      message = `❗ ${error.message}`;
    }

    sendResponse(res, {
      statusCode,
      success: false,
      message,
    });
  }
};

export const getAllCustomers = async (_req: Request, res: Response) => {
  try {
    const result = await CustomerService.getAllCustomers();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "📦 Customers fetched successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: `💥 Failed to fetch customers: ${
        error.message || "Internal server error"
      }`,
    });
  }
};