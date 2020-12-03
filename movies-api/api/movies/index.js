import express from 'express';
import {moviesObject} from './movies';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  res.status(200).send(moviesObject);
});

export default router;