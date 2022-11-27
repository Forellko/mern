import React from 'react';
import { RouterProvider, createBrowserRouter, Router } from 'react-router-dom';
import 'materialize-css';
import { LinksPage } from './pages/LinksPage';
import { CreatePage } from './pages/CreatePage';
import { AuthPage } from './pages/AuthPage';
import { DetailPage } from './pages/DetailPage';
function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <AuthPage />,
    },
    {
      path: '/links',
      element: <LinksPage />,
    },
    {
      path: '/create',
      element: <CreatePage />,
    },
    {
      path: '/detail/:id',
      element: <DetailPage />,
    },
  ]);
  const isAuth = true;
  if (!isAuth) router.navigate('/');

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
