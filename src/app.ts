import express from 'express';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
