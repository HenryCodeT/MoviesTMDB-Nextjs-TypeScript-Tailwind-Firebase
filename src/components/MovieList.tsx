import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Movie from './Movie';

export interface IMovie {
    adult: boolean;
    backdrop_path: string | null;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    videos : IVideo[];
    tagline: string;
}   

export interface IVideo {
  id: string;
  iso_639_1: string; 
  iso_3166_1: string;
  key: string | undefined;
  name: string;
  official: boolean;
  published_at: Date;
  site: string;
  size: number;
  type: string;
}


const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const url =process.env.NEXT_PUBLIC_API_URL;
  const ApiKey =process.env.NEXT_PUBLIC_API_KEY;
  
  const fetchMovies = async () => {
    try {
      const { data: { results } } = await axios.get(`${url}/trending/movie/week`, {
        params: {
          api_key: ApiKey
        }
      }
      );
      setMovies(results);
    } catch (error) {
      console.log({ error });
    }
  };
  
  useEffect(() => {
    fetchMovies();
  }, []);
  return movies; 
};

const MovieList = () => {
  const movies = useMovies();
  
  return (
    <div className='felx flex-col justify-center items-center p-6'>
      <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
        {movies.map((movie,index) =>(
          <Movie key={index} movie={movie}/>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;