import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './containers/layout';
import Loading from './components/loading';
import ScrollToTop from './components/routing/scroll-top';
import { publicRoutes } from './routes';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Layout>
            {publicRoutes.map((route) => (
              <Route {...route} />
            ))}
          </Layout>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
