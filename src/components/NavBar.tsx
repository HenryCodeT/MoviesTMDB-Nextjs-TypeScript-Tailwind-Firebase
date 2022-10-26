import { useAuth } from 'context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavBar  = () => {
  const {user,logout} = useAuth();
  const router = useRouter();

  return (
    <div className="py-4 boder-b-2 border-gray-900">
      <header className="container mx-auto flex flex-row items-center justify-between border-2 border-red-900">
        <h1 className="px-4">
          <Link href="/">
            <a>NFT</a>
          </Link>
        </h1>
        <ul className="flex flex-row items-center justify-between border-2 border-red-900">
          <li className="px-4">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li className="px-4 border-l-2 border-gray-900">
            {
              user?(
                <button type="button" onClick={ async () => {
                  try {
                    await logout();
                    await router.push('/login');
                  } catch (error) {
                    console.log(error);
                  }
                }}>
                                    Logout
                </button>
              ) : (
                <Link href="/login">
                  <a>login</a>
                </Link>
              )                            
            }
          </li>
        </ul>
      </header>
    </div>
  );
};