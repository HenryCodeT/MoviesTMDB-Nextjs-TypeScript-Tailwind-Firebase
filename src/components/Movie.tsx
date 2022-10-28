import Link from 'next/link';
import React, { FC } from 'react';
import { IMovie } from './MovieList';

interface TProps {
    movie: IMovie;
}

const Movie: FC<TProps> = ({movie}) => {
  return (
    <li>
      <Link href={`/movies/${movie.id}`}>
        <img className='cursor-pointer' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`}/>
      </Link>
      <strong className='text-center'>{movie.title}</strong>
    </li>
  );
};

export default Movie;