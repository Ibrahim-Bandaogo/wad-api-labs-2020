import express from 'express';
import {
  getGenres
} from '../tmdb-api';


const router = express.Router();


router.get('/', (req, res,next) => {
  getGenres().then(movies => res.status(200).send(movies));
});
//////
router.get('/:id', (req, res,next) => {
  getGenres().then(genres => res.status(200).send(genres.filter(genre => genre.id == req.params.id)));
});
/////

export default router;