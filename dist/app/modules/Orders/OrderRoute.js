"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const ValidationRequest_1 = __importDefault(require("../../utils/ValidationRequest"));
const OrderController_1 = require("./OrderController");
const OrderValidation_1 = require("./OrderValidation");
const router = express_1.default.Router();
router.post('/', (0, ValidationRequest_1.default)(OrderValidation_1.orderValidation.createOrder), OrderController_1.ordersController.createOrder);
router.get('/', OrderController_1.ordersController.retrieveOrder);
router.get('/:id', OrderController_1.ordersController.retrieveOrderById);
// router.patch('/:id', ordersController.updateOrder)
router.delete('/:id', OrderController_1.ordersController.deleteOrder);
exports.orderRouter = router;
