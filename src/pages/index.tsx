import { Layout } from 'components/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <main className='p-4'>
        <div className='container mx-auto flex flex-col'>
          <h1>Hello worlds</h1>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
