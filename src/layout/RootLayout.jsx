import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const RootLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex justify-start">
      <Sidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
