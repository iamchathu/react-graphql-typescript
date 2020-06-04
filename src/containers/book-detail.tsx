import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../components/loading';

const useStyles = makeStyles((theme) => ({
  card: { margin: theme.spacing(2, 0) },
  content: { padding: theme.spacing(0, 1) },
}));

const GET_BOOK_DETAILS = gql`
  query GetBookByID($id: String!) {
    book: bookById(id: $id) {
      isbn
      name
      year
      author {
        name
        birthYear
      }
    }
  }
`;

const BookDetail = () => {
  const { bookId } = useParams();
  const classes = useStyles();

  const { loading, data, error } = useQuery(GET_BOOK_DETAILS, {
    variables: { id: bookId },
  });

  if (loading) return <Loading />;

  if (error) return <>Error </>;

  const { author, isbn, year, name } = data.book;

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title={name} subheader={year} />
        <CardContent>ISBN: {isbn}</CardContent>
      </Card>
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.content}>
            <Typography variant='body1'> {author.name}</Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            className={classes.content}
            justify='flex-end'>
            <Typography variant='body1'> Born {author.birthYear}</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default BookDetail;
