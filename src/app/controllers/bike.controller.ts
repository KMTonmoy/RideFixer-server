import { Request, Response } from "express";
import { BikeService } from "../services/bike.service";
import sendResponse from "../utils/sendResponse";

export const createBike = async (req: Request, res: Response) => {
  try {
    const result = await BikeService.createBike(req.body);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Bike added successfully",
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
