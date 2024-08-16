import express from 'express';
import { getProducts } from '../controller/products.controller';

export const productsRouter = express.Router();

productsRouter.get('/', getProducts);
