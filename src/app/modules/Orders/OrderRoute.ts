import express from 'express'
import ValidationRequest from '../../utils/ValidationRequest'
import { ordersController } from './OrderController'
import { orderValidation } from './OrderValidation'
import Auth from '../../middlewares/Auth'
import { UserRole } from '@prisma/client'
const router = express.Router()

router.post(
  '/',
  Auth(UserRole.CUSTOMER),
  ValidationRequest(orderValidation.createOrder),
  ordersController.createOrder,
)
router.get('/', ordersController.retrieveOrder)
router.get(
  '/users/my-orders',
  Auth(UserRole.CUSTOMER),
  ordersController.retrieveMyOrders,
)
router.get(
  '/vendor/my-orders',
  Auth(UserRole.VENDOR),
  ordersController.retrieveVendorOrders,
)
router.get('/:id', ordersController.retrieveOrderById)
router.patch('/:id', ordersController.updateOrder)
router.patch(
  '/update/order-status',
  Auth(UserRole.ADMIN, UserRole.SUPER_ADMIN, UserRole.VENDOR),
  ordersController.updateStatus,
)
router.delete('/:id', ordersController.deleteOrder)

export const orderRouter = router
