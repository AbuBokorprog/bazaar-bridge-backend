import express, { NextFunction, Request, Response } from 'express'
import { userControllers } from './user.controller'
import ValidationRequest from '../../utils/ValidationRequest'
import { userValidation } from './user.validation'
import Auth from '../../middlewares/Auth'
import { UserRole } from '@prisma/client'
import { upload } from '../../utils/ImageUpload'
const router = express.Router()

router.post(
  '/create-admin',
  ValidationRequest(userValidation.createAdmin),
  userControllers.createAdmin,
)

router.post(
  '/create-vendor',
  upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'cover', maxCount: 1 },
  ]),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  ValidationRequest(userValidation.createVendor),
  userControllers.createVendor,
)
router.post(
  '/create-customer',
  ValidationRequest(userValidation.createAdmin),
  userControllers.createCustomer,
)

router.get(
  '/',
  Auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userControllers.retrieveAllUsers,
)

router.get('/:id', userControllers.retrieveUserById)
router.patch(
  '/status/user-status',
  Auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
  userControllers.userStatusChanged,
)
router.patch(
  '/role/user-role',
  Auth(
    UserRole.ADMIN,
    UserRole.SUPER_ADMIN,
    UserRole.CUSTOMER,
    UserRole.VENDOR,
  ),
  userControllers.userRoleUpdate,
)
router.get(
  '/profile/my-profile',
  Auth(
    UserRole.ADMIN,
    UserRole.CUSTOMER,
    UserRole.SUPER_ADMIN,
    UserRole.VENDOR,
  ),
  userControllers.myProfile,
)
router.patch(
  '/profile/my-profile',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    next()
  },
  Auth(
    UserRole.ADMIN,
    UserRole.CUSTOMER,
    UserRole.SUPER_ADMIN,
    UserRole.VENDOR,
  ),
  userControllers.updateMyProfile,
)

export const userRouter = router
