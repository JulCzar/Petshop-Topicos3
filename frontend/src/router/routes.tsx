import React from 'react';
import { useRoutes } from 'react-router';

import Layout from 'src/styles/layout';
import * as page from 'src/pages';

const Routes: React.FC = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <page.App /> },
        { path: 'login', element: <page.Login /> },
        { path: 'client', element: <page.ListClients /> },
        { path: 'attendances/new', element: <page.RegisterAttendance /> },
        { path: 'client/new', element: <page.RegisterClient /> },
        { path: 'client/:id', element: <page.ClientDetails /> },
        { path: 'client/:id/pet/new', element: <page.RegisterPet /> },
        { path: 'client/:id/pet/:petId', element: <page.PetDetails /> },
        { path: '*', element: <page.Page404 /> },
      ],
    },
  ]);

  return routes;
};

export default Routes;
