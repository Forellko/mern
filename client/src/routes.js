import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { CreatePage } from './pages/CreatePage';
import { DetailPage } from './pages/DetailPage';
import { LinksPage } from './pages/LinksPage';

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/create" element={<CreatePage />} exact />
        <Route path="/links" element={<LinksPage />} exact />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/create" />}></Route>
      </Routes>
    );
  }

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/" exact element={<AuthPage />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    );
  }
};
