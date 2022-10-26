import Footer from 'components/Footer';
import { NavBar } from 'components/NavBar';
import { ReactNode } from 'react';


interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}:LayoutProps) => {
  return(
    <div className='min-h-screen flex flex-col'>
      <NavBar/>
      <div className='grow'>
        {children}
      </div>
      <Footer/>
    </div>
  );
};