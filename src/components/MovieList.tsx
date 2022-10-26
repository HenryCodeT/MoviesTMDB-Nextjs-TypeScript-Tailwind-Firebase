import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  console.log(movies);
  
  return (
    <div>MovieList</div>
  );
};

export default MovieList;