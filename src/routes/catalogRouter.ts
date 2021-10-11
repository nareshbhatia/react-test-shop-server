import express from 'express';
import { catalog } from './catalog';

export const catalogRouter = express.Router();

/** get catalog */
catalogRouter.get('/', (req, res) => {
  res.send(catalog);
});
