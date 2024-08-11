import express from 'express';
import * as path from 'path';
import { apiRouter } from './routes/api.routes';

const app = express();
const PORT = process.env.PORT || 3333;

// assets static hosting
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// used for sending data from client through body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// all api routes goes through /api
app.use('/api', apiRouter);

// homepage for backend
app.get('/', (req, res) => {
  res.send('<h1> Welcome to wesho-backend! </h1>');
});

const server = app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);
server.on('error', console.error);
