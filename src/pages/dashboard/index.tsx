import { Layout } from 'components/layout';
import type { NextPage } from 'next';
import { BaseContext } from 'next/dist/shared/lib/utils';
import { useEffect, useState } from 'react';

const DashBoard: NextPage<{response: string}> = ({response}) => {

  return(
    <Layout>
      <main className="p-4">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-2xl text-center">
            Dashboard {response} 
          </h1>
        </div>
      </main>
    </Layout>
  );
};

export default DashBoard;

export async function getServerSideProps() {
//   const response = await fetch('api/hello');
  const response = 'message';  
  return{
    props:{
      response
    }
  };   
}