import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import LoginService from '../services/login.service';

const loginRoutes = Router();

const userModel = new UserModel(connection);
const loginService = new LoginService(userModel);
const loginController = new LoginController(loginService);

loginRoutes.post('/', loginController.login);

export default loginRoutes;