/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { router } from './routes/users';

const app = express();
const PORT = process.env.PORT || 3333;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to wesho-backend!' });
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to wesho-backend api page!' });
});

app.get('/api/goals', (req, res) => {
  res.status(200).json({ message: 'Get goals' });
});

app.use('/api/users', router);

const server = app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);
server.on('error', console.error);
