import { HTTP_STATUS } from '../common/httpStatus';

import { Response } from 'express';

export const sendSuccessResponse = (res: Response, result: unknown): void => {
  res.status(HTTP_STATUS.OK).json({
    status: 'success',
    statusCode: HTTP_STATUS.OK,
    result
  });
};

export const sendCreatedResponse = (res: Response, result: unknown): void => {
  res.status(HTTP_STATUS.CREATED).json({
    status: 'success',
    statusCode: HTTP_STATUS.CREATED,
    result
  });
};

export const sendErrorResponse = (res: Response, message: string, statusCode: number, metadata: any): void => {
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
    meta: {
      ...metadata
    }
  });
};
