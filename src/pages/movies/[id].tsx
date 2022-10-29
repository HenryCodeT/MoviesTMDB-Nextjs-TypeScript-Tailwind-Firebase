import { Layout } from 'components/layout';
import { IMovie, IVideo } from 'components/MovieList';
import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface TProps {
    movie: IMovie;
    results: IVideo[];
} 

const MovieDetail: NextPage<TProps> = ({movie,results}) => {
  console.log(movie);
  console.log(results);
  
  const URLIMAGE = 'https://image.tmdb.org/t/p/w500';


  return (
    <Layout>
      <div className='max-w-sm w-full lg:max-w-full lg:flex-row p-20'>
        <div className="font-bold text-xl text-center mb-2">{movie.title}</div>
        <div className='max-w-sm w-full lg:max-w-full lg:flex'>
      
          <iframe
            style={{ width: '1000px' }}
            className='movie-trailer box-shadow col-1/2'
            src={'https://www.youtube.com/embed/'+(results.find(vi=>vi.official==true))?.key} 
            frameBorder="0"
            // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            // allowFullScreen
          />
          <img className="w-full" src={`${URLIMAGE+ movie.backdrop_path}`} alt={`${movie.title} Poster`}/>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base font-bold">
          Overview : <span>{movie.overview}</span>
          </p>
          <p className="text-gray-700 text-base font-bold">
          Tagline : <span>{movie.tagline}</span>
          </p>
          <p className="text-gray-700 text-base font-bold">
          Original_language : <span>{movie.original_language}</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  const resVideos = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/movie/' + context.params?.id +'/videos'+'?api_key='+process.env.NEXT_PUBLIC_API_KEY
  );
  const {results} = await resVideos.json();
  console.log(results);
    
  const resMovie = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/movie/' + context.params?.id +'?api_key='+process.env.NEXT_PUBLIC_API_KEY
  );
  const movie = await resMovie.json();

  return {
    props: {
      movie,
      results
    },
  };
};

export default MovieDetail;