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
  
  const URLIMAGE = 'https://image.tmdb.org/t/p/w500';


  return (
    <Layout>
      <div className='max-w-sm w-full lg:max-w-full lg:flex-row p-20'>
        <div className="text-2xl sm:text-3xl text-gray-600 font-bold text-center">{movie.title}</div>
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
          <div className='flex items-center m-2'>
            <h6 className="text-2xl sm:text-3xl text-gray-600 font-bold">
            Overview:
            </h6>
            <h6 className='text-2xl sm:text-3xl text-gray-600 ml-1'>
              {movie.overview}
            </h6>
          </div>
          <hr />
          <div className='flex items-center justify-between m-2'>
            <h6 className="text-2xl sm:text-3xl text-gray-600 font-bold">
            Tagline:
            </h6>
            <h6 className='text-2xl sm:text-3xl text-gray-600 ml-1'>
              {movie.tagline}
            </h6>
          </div>
          <div className='flex items-center justify-between m-2'>
            <h6 className="text-2xl sm:text-3xl text-gray-600 font-bold">
            Original Language:
            </h6>
            <h6 className='text-2xl sm:text-3xl text-gray-600 ml-1'>
              {movie.original_language}
            </h6>
          </div>
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