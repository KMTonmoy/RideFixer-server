import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";
import sendResponse from "../utils/sendResponse";

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const result = await CustomerService.createCustomer(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
