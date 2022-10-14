import express from "express";
import { OrdersController } from "../controller/OrderController";

export const ordersRouter = express.Router();

const orderController = new OrdersController();
ordersRouter.post("/orders", orderController.createOrder);