import React from 'react';
import { FlapperSpinner } from 'react-spinners-kit';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Loading = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.root}>
      <FlapperSpinner color={theme.palette.primary.main} size={50} />
    </Container>
  );
};

export default Loading;
