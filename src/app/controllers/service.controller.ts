import { Request, Response } from "express";
import { ServiceService } from "../services/service.service";
import sendResponse from "../utils/sendResponse";

export const createService = async (req: Request, res: Response) => {
  try {
    const result = await ServiceService.createService(req.body);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Service record created successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Failed to create service record",
    });
  }
};


export const getAllServices = async (_req: Request, res: Response) => {
  try {
    const result = await ServiceService.getAllServices();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service records fetched successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Failed to fetch service records",
    });
  }
};


export const getServiceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ServiceService.getServiceById(id);

    if (!result) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Service record not found",
      });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Internal server error",
    });
  }
};



export const completeService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { completionDate } = req.body;

     const completedAt = completionDate ? new Date(completionDate) : new Date();

    const result = await ServiceService.completeService(id, completedAt);

    if (!result) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Service record not found",
      });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Internal server error",
    });
  }
};




export const getPendingOrOverdueServices = async (
  _req: Request,
  res: Response
) => {
  try {
     const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

     const result = await ServiceService.getPendingOrOverdueServices(
      sevenDaysAgo
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Overdue or pending services fetched successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
