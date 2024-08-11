import expressAsyncHandler from 'express-async-handler';

// @desc Get goals
// @route GET api/goals
// @access Private
export const getGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' });
});

// @desc Set goals
// @route POST api/goals
// @access Private
export const setGoals = expressAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: `set goals${req.body.text}` });
});

// @desc update goal
// @route PUT api/goals/:id
// @access Private
export const updateGoal = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

// @desc delete goal
// @route DELETE api/goals/:id
// @access Private
export const deleteGoal = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});
