import { Layout } from 'components/layout';
import MovieList from 'components/MovieList';
import { NextPage } from 'next';
import React from 'react';

interface Tprops {
  reponse: string;
}

const Movies: NextPage<Tprops> = () => {
  return (
    <Layout>
      <div className='text-center font-bold'>Movies</div>
      <MovieList/>
    </Layout>
  );
};

export default Movies;