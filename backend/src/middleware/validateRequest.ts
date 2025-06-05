import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod/v4';

export const validateRequest = (schema: ZodObject, source: 'body' | 'query' | 'params' = 'body') => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync(req[source]);
    return next();
  };
};
