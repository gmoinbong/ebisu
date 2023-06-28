import React, { useEffect } from 'react';
import { debounce } from 'lodash';
import { useRouteChange } from '../../hooks/useRouteChange';

const NotFoundPage: React.FC = () => {
  const routeChange = useRouteChange()

  useEffect(() => {
    const redirectToHome = debounce(() => {
      routeChange('/')
    }, 3000);

    redirectToHome();

    return () => {
      redirectToHome.cancel();
    };
  }, [routeChange]);

  return (
    <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Page Not Found, redirecting..</h1>
    </div>
  );
};

export default NotFoundPage;
