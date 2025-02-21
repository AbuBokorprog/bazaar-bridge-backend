import express from 'express'
import { userRouter } from '../modules/users/user.route'
import { shopRouter } from '../modules/shop/shop.route'
import { productRouter } from '../modules/Products/ProductsRoute'
import { categoryRouter } from '../modules/Categories/CategoriesRoute'
import { couponRouter } from '../modules/Coupon/CouponRoute'
import { reviewRouter } from '../modules/Review/ReviewRoute'
import { followerRouter } from '../modules/Follower/FollowersRoute'
import { authRouter } from '../modules/Auth/AuthRoute'
import { comparisonRouter } from '../modules/Comparison/ComparisonRoute'
import { cartRouter } from '../modules/Carts/CartsRoute'
import { orderRouter } from '../modules/Orders/OrderRoute'
import { reportsRoute } from '../modules/dashboard-reports/reports.route'
import { recentProductsRouter } from '../modules/RecentProducts/RecentProductsRoute'
import { wishlistRouter } from '../modules/Wishlist/WishlistRoute'
import { paymentRoute } from '../modules/Payment/PaymentRoute'
import { newsletterRoute } from '../modules/Newsletter/NewsletterRoute'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/shop',
    route: shopRouter,
  },
  {
    path: '/category',
    route: categoryRouter,
  },
  {
    path: '/products',
    route: productRouter,
  },
  {
    path: '/recently-viewed',
    route: recentProductsRouter,
  },
  {
    path: '/carts',
    route: cartRouter,
  },
  {
    path: '/orders',
    route: orderRouter,
  },
  {
    path: '/payment',
    route: paymentRoute,
  },
  {
    path: '/coupon',
    route: couponRouter,
  },
  {
    path: '/reviews',
    route: reviewRouter,
  },
  {
    path: '/follower',
    route: followerRouter,
  },
  {
    path: '/comparison',
    route: comparisonRouter,
  },
  {
    path: '/dashboard-reports',
    route: reportsRoute,
  },
  {
    path: '/wishlist',
    route: wishlistRouter,
  },
  {
    path: '/newsletter',
    route: newsletterRoute,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
