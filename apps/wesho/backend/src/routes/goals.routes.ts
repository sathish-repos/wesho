import express from 'express';

export const goalsRouter = express.Router();

goalsRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Get goals' });
});

goalsRouter.post('/', (req, res) => {
  res.status(200).json({ message: 'set goals' });
});

goalsRouter.put('/:id', (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

goalsRouter.delete('/:id', (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});
