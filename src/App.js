import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { useAuth } from 'features/auth';
import { PageLoading } from 'features/common';

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
