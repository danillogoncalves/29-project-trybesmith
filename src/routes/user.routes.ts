import { Router } from 'express';
import UserContrller from '../controllers/user.controller';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import UserService from '../services/user.service';

const userRoutes = Router();

const userModel = new UserModel(connection);
const userService = new UserService(userModel);
const userController = new UserContrller(userService);

userRoutes.post('/', userController.create);

export default userRoutes;