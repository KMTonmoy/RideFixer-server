import { Response } from "express";

type TSendResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
};

const sendResponse = <T>(res: Response, data: TSendResponse<T>) => {
  const responseData: TSendResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    data: data.data,
  };
  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
