"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponRouter = void 0;
const express_1 = __importDefault(require("express"));
const ValidationRequest_1 = __importDefault(require("../../utils/ValidationRequest"));
const CouponValidation_1 = require("./CouponValidation");
const CouponController_1 = require("./CouponController");
const Auth_1 = __importDefault(require("../../middlewares/Auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post('/', (0, ValidationRequest_1.default)(CouponValidation_1.couponValidation.createCoupon), CouponController_1.couponController.createCoupon);
router.post('/apply-coupon', (0, Auth_1.default)(client_1.UserRole.CUSTOMER), CouponController_1.couponController.applyCoupon);
router.get('/', CouponController_1.couponController.retrieveAllCoupon);
router.get('/:id', CouponController_1.couponController.retrieveCouponById);
router.patch('/:id', CouponController_1.couponController.updateCouponById);
router.delete('/:id', CouponController_1.couponController.deleteCouponById);
exports.couponRouter = router;
