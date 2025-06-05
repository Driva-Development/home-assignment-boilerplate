import { HTTP_STATUS } from '../common/httpStatus';
import { logger } from '../utilities/logger';
import { sendErrorResponse } from '../utilities/response';

import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const errorHandler: ErrorRequestHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  const statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = (err as Error)?.message;
  const metadata = process.env.NODE_ENV === 'development' && { stack: (err as Error).stack };
  logger.error('errorHandler', `Uncaught Error: Request path: ${req.url}, Method: ${req.method}`, err);

  sendErrorResponse(res, message, statusCode, metadata);
};
