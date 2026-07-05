import { NextFunction, Request, Response } from 'express';
import z from 'zod';

export const validateRequest = (zodSchema: z.ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    let body = req.body;

    if (req.body.data) {
      try {
        body = JSON.parse(req.body.data);
      } catch {
        return next(new Error('Invalid JSON in data field'));
      }
    }

    const parsed = zodSchema.safeParse(body);

    if (!parsed.success) {
      return next(parsed.error);
    }

    req.body = parsed.data;

    next();
  };
};
