import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import connection from '../models/connection';
import ProductModel from '../models/product.model';
import ProductService from '../services/product.service';

const productRoutes = Router();

const productModel = new ProductModel(connection);
const productService = new ProductService(productModel);
const productController = new ProductController(productService);

productRoutes.post('/', productController.create);

export default productRoutes;
