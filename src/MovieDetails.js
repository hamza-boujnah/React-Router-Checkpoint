
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title} Details</h1>
      <p>Description: {movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Director: {movie.details.director}</p>
      <p>Release Date: {movie.details.releaseDate}</p>
      <p>Genre: {movie.details.genre}</p>
      <iframe title={movie.title} width="560" height="315" src={movie.trailerLink} frameBorder="0" allowFullScreen></iframe>
      <Link to="/">Back to Movie List</Link>
    </div>
  );
};



export default MovieDetails;

