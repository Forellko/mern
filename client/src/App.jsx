import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'materialize-css';
import { useRoutes } from './routes';
function App() {
  const isAuth = false;

  const routes = useRoutes(isAuth);

  return (
    <BrowserRouter>
      <div className="container">{routes}</div>
    </BrowserRouter>
  );
}

export default App;
