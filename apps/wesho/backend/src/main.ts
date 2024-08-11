/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { apiRouter } from './routes/api.routes';

const app = express();
const PORT = process.env.PORT || 3333;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send('<h1> Welcome to wesho-backend! </h1>');
});

app.use('/api', apiRouter);

const server = app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);
server.on('error', console.error);
