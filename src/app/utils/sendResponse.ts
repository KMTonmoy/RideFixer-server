import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  data: {
    statusCode: number;
    success: boolean;
    message: string;
    data?: T;
  }
) => {
  const responseBody: {
    success: boolean;
    message: string;
    data?: T;
  } = {
    success: data.success,
    message: data.message,
  };

  if (data.data !== undefined) {
    responseBody.data = data.data;
  }

  res.status(data.statusCode).json(responseBody);
};

export default sendResponse;
