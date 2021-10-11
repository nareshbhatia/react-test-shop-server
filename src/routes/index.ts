import express from 'express';
import { cartRouter } from './cartRouter';
import { catalogRouter } from './catalogRouter';
import { ordersRouter } from './ordersRouter';

export const rootRouter = express.Router();
rootRouter.use('/cart', cartRouter);
rootRouter.use('/catalog', catalogRouter);
rootRouter.use('/orders', ordersRouter);
