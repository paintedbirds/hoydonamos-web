import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { PageLoading } from 'features/common';
import { useAuth } from 'features/auth';

const Authenticated = lazy(() => import('routers/Authenticated'));
const Unauthenticated = lazy(() => import('routers/Unauthenticated'));

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
