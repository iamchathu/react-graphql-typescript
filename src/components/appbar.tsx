import React from 'react';
import MAppBar from '@material-ui/core/AppBar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    padding: theme.spacing(0, 1),
    zIndex: theme.zIndex.drawer + 1,
  },
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
}));

const AppBar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <MAppBar position='fixed'>
        <Toolbar>
          <Link
            component={RouterLink}
            to='/'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'hand',
            }}>
            <Typography variant='h3' className={classes.title}>
              Bookstore
            </Typography>
          </Link>
        </Toolbar>
      </MAppBar>
      <div className={classes.offset} />
    </>
  );
};

export default AppBar;
