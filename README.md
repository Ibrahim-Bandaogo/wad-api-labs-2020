# Assignment 2 - Web API.

Name: Ibrahim Bandaogo

## Features.
 
 + Upcoming routes - Allows a user to access upcoming movies 
 + Get all movies or an individual genre by adding movie id
 + 
 

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone http:\myrepo.git
```

followed by installation

```bat
git install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| ... | ... | ... | ... | ...


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

- /api/movies



## Integrating with React App
To integrate my react app with the API, I juste included some data and check if the integration works by updating my react app with few changes to work with my API. After, I integrated some aspects into my movies app and from that change i started getting the movies using my own API not the tmdb one.   
In file movies-app/src/api/movie-api.js, API call from React App code example: 

~~~Javascript
export const getUpcomingMovies = () => {
    return fetch(
       '/api/movies/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());



~~~


