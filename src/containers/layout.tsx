import React, { Suspense } from 'react';
import AppBar from '../components/appbar';
import Loading from '../components/loading';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    margin: theme.spacing(3),
    flexGrow: 1,
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <main className={classes.main}>{children}</main>
      </Suspense>
    </>
  );
};

export default Layout;
