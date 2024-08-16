import express from 'express';
import {
  deleteGoal,
  getGoals,
  setGoals,
  updateGoal,
} from '../controller/goals.controller';

export const goalsRouter = express.Router();

// it's /api/goals handler

// ex for chaining the same routes
goalsRouter.route('/').get(getGoals).post(setGoals);

// ex without chaining the same routes
goalsRouter.put('/:id', updateGoal);
goalsRouter.delete('/:id', deleteGoal);
