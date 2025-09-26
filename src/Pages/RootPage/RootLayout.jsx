import { Outlet, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const RootLayout = () => {
  return (
    <>
      <header className="">
        <Navbar/>
      </header>

      <main className="">
        <Outlet />
      </main>

      <footer className="">
        &copy; 2025 My App
      </footer>
    </>
  );
};

export default RootLayout;
