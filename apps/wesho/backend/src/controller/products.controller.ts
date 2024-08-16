import expressAsyncHandler from 'express-async-handler';

// @desc Get goals
// @route GET api/goals
// @access Private
export const getProducts = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ products });
});

const products = [
  {
    id: 1,
    name: 'iphone 14',
  },
  {
    id: 2,
    name: 'iphone 15',
  },
  {
    id: 3,
    name: 'iphone 16',
  },
];
