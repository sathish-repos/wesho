import express from 'express';

export const goalsRouter = express.Router();

goalsRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Get goals' });
});
