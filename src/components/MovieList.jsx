import React from 'react';
import { MovieCard } from './MovieCard';

export const MovieList = (props) => {
  return (
    <div className='cardlist'>
        {/* constract each movie card */}
      {props.allmovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}