// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails'; // Import the new MovieDetails component
import Filter from './Filter'; // Assuming you have a Filter component

function App() {
  const [movies, setMovies] = useState([
    {
    id: 1,
    title: "Interstellar",
    description: "A science fiction film about space travel.",
    posterURL: "/interstellar-poster.jpg",
    rating: 4.5,
    details: {
      director: "Christopher Nolan",
      releaseDate: "2014-11-05",
      genre: "Science Fiction",
    },
    trailerLink: "https://www.youtube.com/embed/trailer1",
  },
  {
    id: 2,
    title: "The Pursuit of Happyness",
    description: "A drama film based on a true story.",
    posterURL: "/pursuit-of-happyness-poster.jpg",
    rating: 4.7,
    details: {
      director: "Gabriele Muccino",
      releaseDate: "2006-12-15",
      genre: "Drama",
    },
    trailerLink: "https://www.youtube.com/embed/trailer2",
  },
  {
    id: 3,
    title: "Work It",
    description: "A teen comedy film about dance.",
    posterURL: "/work-it-poster.jpg",
    rating: 3.9,
    details: {
      director: "Laura Terruso",
      releaseDate: "2020-08-07",
      genre: "Comedy",
    },
    trailerLink: "https://www.youtube.com/embed/trailer3",
  },
  {
    id: 4,
    title: "The Godfather",
    description: "A crime film about the Italian-American mafia.",
    posterURL: "/godfather-poster.jpg",
    rating: 4.9,
    details: {
      director: "Francis Ford Coppola",
      releaseDate: "1972-03-14",
      genre: "Crime",
    },
    trailerLink: "https://www.youtube.com/embed/trailer4",
  },
  {
    id: 5,
    title: "Dashra",
    description: "A mystery thriller.",
    posterURL: "/dashra-poster.jpg",
    rating: 4.2,
    details: {
      director: "Some Director",
      releaseDate: "2022-10-31",
      genre: "Mystery",
    },
    trailerLink: "https://www.youtube.com/embed/trailer5",
  },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filterMovies = (titleFilter, ratingFilter) => {
    return movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= ratingFilter
      );
    });
  };

  return (
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Switch>
          <Route path="/" exact>
            <Filter
              onTitleChange={(titleFilter) => setTitleFilter(titleFilter)}
              onRatingChange={(ratingFilter) => setRatingFilter(ratingFilter)}
            />
            <MovieList movies={filterMovies(titleFilter, ratingFilter)} />
            <form onSubmit={addMovie}>
              {/* Input fields for adding a new movie */}
            </form>
          </Route>
          
          <Route path="/movie/:id">
            <MovieDetails movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

