import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const SignUpPage = lazy(() => import('pages/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const HomePage = lazy(() => import('pages/HomePage'));

const App = () => (
  <BrowserRouter>
    <Suspense delayMs={500} fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/iniciar-sesion">
          <SignInPage />
        </Route>
        <Route path="/registro">
          <SignUpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
