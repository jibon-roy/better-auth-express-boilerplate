import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from './user.service';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await UserService.createAdmin(payload);

  sendResponse(res, {
    httpStatusCode: StatusCodes.CREATED,
    success: true,
    message: 'Admin registered successfully',
    data: result,
  });
});

export const UserController = {
  createAdmin,
};
