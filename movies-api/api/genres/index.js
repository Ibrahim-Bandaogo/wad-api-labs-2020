import express from 'express';
import {
  getGenres
} from '../tmdb-api';


const router = express.Router();


router.get('/', (req, res,next) => {
  getGenres().then(movies => res.status(200).send(movies));
});

export default router;