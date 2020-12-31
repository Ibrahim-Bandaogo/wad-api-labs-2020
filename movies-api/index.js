import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import bodyParser from 'body-parser';
import './db';
import {loadUsers, loadMovies} from './seedData';
import usersRouter from './api/users';
import session from 'express-session';
//import authenticate from './authenticate';
import passport from './authenticate';



dotenv.config();

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
}

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};
const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

// initialise passport​
app.use(passport.initialize());


//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

//update /api/Movie route
//app.use('/api/movies', authenticate, moviesRouter);
app.use('/api/genres', genresRouter);


//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/users', usersRouter);
app.use(errHandler);

// Add passport.authenticate(..)  to middleware stack for protected routes​
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});