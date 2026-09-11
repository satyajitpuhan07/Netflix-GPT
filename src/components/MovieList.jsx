import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies);

      if (!movies || movies.length === 0) {
    return null; // or a loading spinner / "No movies found" message
  }
    
  return (
    <div className='px-1 '>
        <h1 className='py-2 text-2xl font-bold text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='p-1 flex'>
            {movies.map((movie) => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
        </div>
        </div>
    </div>
  );
};

export default MovieList;