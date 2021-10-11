import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { CheckoutInfo, Order } from '../models';
import { clearCart } from './cartRouter';
import orders from './orders.json';

export const ordersRouter = express.Router();

/** get orders */
ordersRouter.get('/', (req, res) => {
  res.send(orders);
});

/** create an order */
ordersRouter.post('/', (req, res) => {
  const checkoutInfo = req.body as CheckoutInfo;

  // Move cart items into the order
  const order: Order = {
    id: uuidv4(),
    items: clearCart(),
    shippingAddress: checkoutInfo.shippingAddress,
  };
  // @ts-ignore
  orders.push(order);

  res.send(order);
});
