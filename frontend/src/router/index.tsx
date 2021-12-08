import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
