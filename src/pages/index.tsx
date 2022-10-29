import { Layout } from 'components/layout';
import { useAuth } from 'context/AuthContext';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const {user} = useAuth();
  const email = user?.email;
  const name = email?.split('@')[0];
  return (
    <Layout>
      <main className='p-4'>
        <div className='container mx-auto flex flex-col'>
          <h1 className='text-center'>Welcome <span>{name}</span></h1>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
