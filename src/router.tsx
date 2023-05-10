import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const User = Loader(
  lazy(() => import('src/User'))
);

const routes: RouteObject[] = [
  {
    path: '',
    children: [
      {
        path: '/',
        element: <User />
      },
      {
        path: 'user',
        element: <Navigate to="/" replace />
      },
    ]
  }
];

export default routes;
