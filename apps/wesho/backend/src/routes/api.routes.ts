import express from 'express';
import { goalsRouter } from './goals.routes';
import { usersRouter } from './users.routes';
import { productsRouter } from './products.routes';

export const apiRouter = express.Router();

// it's /api route handler
apiRouter.get('/', (req, res) => {
  res.send({ message: 'Welcome to wesho-backend api page!' });
});

// it's /api/goals route handler
apiRouter.use('/goals', goalsRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/products', productsRouter);
