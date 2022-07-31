import express from 'express';
import orderRoutes from './routes/order.routes';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import 'express-async-errors';
import loginRoutes from './routes/login.routes';
import error from './middlewares/erro.middleware';

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.use(error);

export default app;
