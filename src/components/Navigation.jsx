import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import AnalyticsPage from '../pages/AnalyticsPage';
import GroceryPage from '../pages/GroceryPage';
import CollectionPage from '../pages/CollectionPage';
import Sidebar from './Sidebar';
import RootLayout from '../layout/RootLayout';

const Navigation = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/grocery" element={<GroceryPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <Sidebar />
    </RouterProvider>
  );
};

export default Navigation;
