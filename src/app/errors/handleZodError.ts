import { StatusCodes } from 'http-status-codes';
import z from 'zod';
import { TErrorResponse, TErrorSources } from '../interface/error';

export const handleZodError = (err: z.ZodError): TErrorResponse => {
  const statusCode = StatusCodes.BAD_REQUEST;
  const message = 'Zod Validation Error';

  const errorSources: TErrorSources[] = err.issues.map((issue) => ({
    path: issue.path.join(' => '),
    message: issue.message,
  }));

  return {
    success: false,
    message,
    errorSources,
    statusCode,
  };
};
