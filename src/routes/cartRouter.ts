import express from 'express';
import { Cart, CartUtils, OrderItem } from '../models';
import { catalog } from './catalog';

let cart: Cart = { items: [] };

/** Empties the cart and returns any items in the cart */
export function clearCart(): Array<OrderItem> {
  const cartItems = cart.items;
  cart = { items: [] };
  return cartItems;
}

export const cartRouter = express.Router();

/** get cart */
cartRouter.get('/', (req, res) => {
  res.send(cart);
});

/** add a product to the cart */
cartRouter.post('/items', (req, res) => {
  const { productId } = req.body as { productId: string };
  cart = CartUtils.addProduct(cart, catalog[productId]);
  res.send(cart);
});

/** delete an item from the cart */
cartRouter.delete('/items/:productId', (req, res) => {
  const { productId } = req.params;
  cart = CartUtils.deleteItem(cart, productId);
  res.send(cart);
});

/** set the quantity of an item in the cart */
cartRouter.patch('/items/:productId', (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body as any;
  cart = CartUtils.setItemQuantity(cart, productId, quantity);
  res.send(cart);
});
