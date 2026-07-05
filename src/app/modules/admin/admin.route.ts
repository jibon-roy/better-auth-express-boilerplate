import { Router } from 'express';
import { AdminController } from './admin.controller';
import { updateAdminZodSchema } from './admin.validation';
import { checkAuth } from '../../middlewares/auth';
import { validateRequest } from '../../middlewares/validateRequest';
import { Role } from '../../../generated/enums';
const router = Router();

// Static routes
router.get(
  '/',
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AdminController.getAllAdmins
);

router.patch(
  '/change-user-status',
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  AdminController.changeUserStatus
);

router.patch(
  '/change-user-role',
  checkAuth(Role.SUPER_ADMIN),
  AdminController.changeUserRole
);

// Dynamic routes
router.get(
  '/:id',
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  AdminController.getAdminById
);

router.patch(
  '/:id',
  checkAuth(Role.SUPER_ADMIN),
  validateRequest(updateAdminZodSchema),
  AdminController.updateAdmin
);

router.delete('/:id', checkAuth(Role.SUPER_ADMIN), AdminController.deleteAdmin);

export const AdminRoutes = router;
