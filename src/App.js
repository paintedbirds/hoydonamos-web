import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Loading } from 'features/common';
import { useAuth } from 'features/auth';

const Authenticated = lazy(() => import('routers/Authenticated'));
const Unauthenticated = lazy(() => import('routers/Unauthenticated'));

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<Loading />}>
        {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
