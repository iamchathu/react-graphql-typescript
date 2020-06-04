import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: { margin: theme.spacing(2, 0) },
  content: { padding: theme.spacing(0, 1) },
}));

const BookDetail = () => {
  // const { bookId } = useParams();
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title={'Book Name'} subheader={'Year'} />
        <CardContent>ISBN: {'ISBN'}</CardContent>
      </Card>
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.content}>
            <Typography variant='body1'> {'Author name'}</Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            className={classes.content}
            justify='flex-end'>
            <Typography variant='body1'> Born {'1964'}</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default BookDetail;
