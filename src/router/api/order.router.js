import express from "express";
import * as OrderController  from "../../controllers/order.controller.js"

// http://localhost:8080/api/orders

const orderRouter = express.Router();

orderRouter.get('/', OrderController.getOrderController)

orderRouter.post('/', OrderController.saveOrderController)

export {orderRouter}
