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


export const getAllBikes = async (_req: Request, res: Response) => {
  try {
    const result = await BikeService.getAllBikes();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Bikes fetched successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};


export const getBikeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BikeService.getBikeById(id);

    if (!result) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Bike not found",
      });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Bike fetched successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
