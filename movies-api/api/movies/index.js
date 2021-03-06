import express from 'express';
//import { getUpcomingMovies } from '../../../moviesApp/src/api/tmdb-api';
import {
  getMovies, getMovie, getMovieReviews
} from '../tmdb-api';
import movieModel from './movieModel';


const router = express.Router();


router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

////
router.get('/upcoming', (req, res, next) => {
  movieModel.find({"upcoming": true}).then(movies => res.status(200).send(movies)).catch(next);
});
///////



router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.post('/', (req, res) => {
  let newMovie = req.body;
  if (newMovie && newMovie.title) {
    //Adds a random id if missing. 
    !newMovie.id ? newMovie.id = Math.round(Math.random() * 10000) : newMovie 
    moviesObject.movies.push(newMovie);
    res.status(201).send(newMovie);
  } else {
    res.status(405).send({
      message: "Invalid Movie Data",
      status: 405
    });
  }
});

// Update a movie
router.put('/:id', (req, res) => {
  const key = parseInt(req.params.id);
  const updateMovie = req.body;
  const index = moviesObject.movies.map((movie) => {
    return movie.id;
  }).indexOf(key);
  if (index !== -1) {
    !updateMovie.id ? updateMovie.id = key : updateMovie
    moviesObject.movies.splice(index, 1, updateMovie);
    res.status(200).send(updateMovie);
  } else {
    res.status(404).send({
      message: 'Unable to find Movie',
      status: 404
    });
  }
});

// Delete a movie
router.delete('/:id', (req, res) => {
  const key =  parseInt(req.params.id);
  const index = moviesObject.movies.map((movie)=>{
return movie.id;
}).indexOf(key);
 if (index > -1) {
  moviesObject.movies.splice(index, 1);
     res.status(200).send({message: `Deleted movie id: ${key}.`,status: 200});
 } else {
   res.status(404).send({message: `Unable to find movie with id: ${key}.`, status: 404});
   }
});

export default router;