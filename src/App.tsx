import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, Suspense, lazy, FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// was added component loading page with component Suspend for Lazy loading
import Loader from 'components/Loader';

// was added lazy loading to page
const Main = lazy(() => import('pages/Main'));
const Favorites = lazy(() => import('pages/Favorites'));

interface Props {}

const App: FC<Props> = () => {
  useEffect(() => AOS.init(), []);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/favoritos">
            <Favorites />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
