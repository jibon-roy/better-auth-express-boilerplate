import { Router } from 'express';
import { UserController } from './user.controller';
import { checkAuth } from '../../middlewares/auth';
import { Role } from '../../../generated/enums';

const router = Router();

router.post(
  '/create-admin',
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  UserController.createAdmin
);

export const UserRoutes = router;
