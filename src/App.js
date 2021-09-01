import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Loading from 'components/Loading';
import { useAuth } from 'contexts/auth';

const Authenticated = lazy(() => import('routers/Authenticated'));
const Unauthenticated = lazy(() => import('routers/Unauthenticated'));

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<Loading />}>
        {isAuthenticated ? <Authenticated /> : <Unauthenticated />}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
