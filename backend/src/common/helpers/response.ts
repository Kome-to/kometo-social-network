/**
 * This helper to unify the format of the API response
 */

import { Response } from "express";
import httpStatus from "http-status";

function returnObject(success = true, code: number, message = "", data = null) {
  return {
    success,
    code,
    message,
    data,
  };
}

function responseData(
  res: Response,
  httpCode: number,
  success = true,
  message = "",
  data = null
) {
  return res
    .status(httpCode)
    .json(returnObject(success, httpCode, message, data));
}

function responseError(
  res: Response,
  code = httpStatus.INTERNAL_SERVER_ERROR,
  message: string = "111",
  data = null
): Response<unknown, Record<string, unknown>> {
  return responseData(res, code, false, message, data);
}

function responseSuccess(
  res: Response,
  data?: unknown
): Response<unknown, Record<string, unknown>> {
  return responseData(res, httpStatus.OK, true, "", data as any);
}

export default {
  error: responseError,
  success: responseSuccess,
};
