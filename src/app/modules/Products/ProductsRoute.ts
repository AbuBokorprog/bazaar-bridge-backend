import express, { NextFunction, Request, Response } from 'express'
import ValidationRequest from '../../utils/ValidationRequest'
import { productController } from './ProductsController'
import { productValidation } from './ProductValidation'
import { upload } from '../../utils/ImageUpload'
import Auth from '../../middlewares/Auth'
import { UserRole } from '@prisma/client'

const router = express.Router()

router.post(
  '/',
  upload.array('files[]'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data)
    console.log(req.files)
    next()
  },
  Auth(UserRole.VENDOR),
  ValidationRequest(productValidation.CreateProductSchema),
  productController.createProduct,
)
router.get('/', productController.retrieveAllProduct)
router.get(
  '/vendor/my-product',
  Auth(UserRole.VENDOR),
  productController.retrieveAllProductByVendor,
)
router.get('/:id', productController.retrieveProductById)
router.patch('/:id', productController.updateProductById)
router.delete('/:id', productController.deleteProductById)

export const productRouter = router
