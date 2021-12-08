import React from 'react';
import { useRoutes } from 'react-router';
import { useLayoutProps } from 'src/hooks';

import * as page from 'src/pages';
import Template from 'src/styles/layout/template';

const Routes: React.FC = () => {
  const { global } = useLayoutProps();

  const routes = useRoutes([
    {
      path: '/',
      element: <Template />,
      children: [
        { path: '/', element: <page.App /> },
        { path: 'login', element: <page.Login /> },
        ...(global?.user
          ? [
              { path: 'attendances', element: <page.ListAttendances /> },
              { path: 'attendances/new', element: <page.RegisterAttendance /> },
              { path: 'attendances/:id', element: <page.AttendanceDetails /> },
              { path: 'client', element: <page.ListClients /> },
              { path: 'client/new', element: <page.RegisterClient /> },
              { path: 'client/:id', element: <page.ClientDetails /> },
              { path: 'client/:id/pet/new', element: <page.RegisterPet /> },
              { path: 'client/:id/pet/:petId', element: <page.PetDetails /> },
            ]
          : []),
        { path: '*', element: <page.Page404 /> },
      ],
    },
  ]);

  return routes;
};

export default Routes;
