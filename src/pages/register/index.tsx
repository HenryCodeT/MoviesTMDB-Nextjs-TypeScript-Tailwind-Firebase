import { useAuth } from 'context/AuthContext';
import { Layout } from 'components/layout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';


const Register:NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {register} = useAuth();
  const router = useRouter();

  return (
    <Layout>
      <main className="p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center">Register Your Account</h1>
          <form 
            className="w-3/4 max-w-md mt-4 mx-auto"
            onSubmit={async (e) =>{
              e.preventDefault();
              try {
                await register(email,password);
                await router.push('/movies');
              } catch (error) {
                console.log(error);
              }
            }}    
          >
            <div className="mb-4">
              <label htmlFor="email"/>
              <input
                className="w-full p-2 border-2 border-gray-900"
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email"/>
              <input
                className="w-full p-2 border-2 border-gray-900"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                className="w-full py-2 px-6 text-gray-50 bg-gray-900"
                type="submit"
              >
                            Register
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default Register;