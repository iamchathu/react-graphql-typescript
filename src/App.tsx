import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from './containers/layout';
import Loading from './components/loading';
import ScrollToTop from './components/routing/scroll-top';
import { publicRoutes } from './routes';
import theme from './components/theme';

const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <Router>
            <ScrollToTop />
            <Switch>
              <Layout>
                {publicRoutes.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
              </Layout>
            </Switch>
          </Router>
        </Suspense>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
