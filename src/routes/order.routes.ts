import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import OrderService from '../services/order.service';

const orderRoutes = Router();

const orderModel = new OrderModel(connection);
const orderService = new OrderService(orderModel);
const orderController = new OrderController(orderService);

orderRoutes.get('/', orderController.findAll);

export default orderRoutes;