import express from 'express';
import { goalsRouter } from './goals.routes';
import { usersRouter } from './users.routes';

export const apiRouter = express.Router();

// it's /api route handler
apiRouter.get('/', (req, res) => {
  res.send({ message: 'Welcome to wesho-backend api page!' });
});

apiRouter.use('/goals', goalsRouter);
apiRouter.use('/users', usersRouter);
