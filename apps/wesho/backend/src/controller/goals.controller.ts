// @desc Get goals
// @route GET api/goals
// @access Private
export const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' });
};

// @desc Set goals
// @route POST api/goals
// @access Private
export const setGoals = (req, res) => {
  res.status(200).json({ message: `set goals${req.body.text}` });
};

// @desc update goal
// @route PUT api/goals/:id
// @access Private
export const updateGoal = (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
};

// @desc delete goal
// @route DELETE api/goals/:id
// @access Private
export const deleteGoal = (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
};
