import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AnalyticsPage from './pages/AnalyticsPage';
import GroceryPage from './pages/GroceryPage';
import CollectionPage from './pages/CollectionPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/search',
      element: <SearchPage />,
    },
    {
      path: '/analytics',
      element: <AnalyticsPage />,
    },
    {
      path: '/grocery',
      element: <GroceryPage />,
    },
    {
      path: '/collection',
      element: <CollectionPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
