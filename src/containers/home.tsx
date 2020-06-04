import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Book from '../components/book';

const books = [
  {
    id: '1',
    name: 'The Davinci Code',
    year: 2003,
  },
  {
    id: '2',
    name: 'Angels and demons',
    year: 2003,
  },
  {
    id: '3',
    name: 'Origin',
    year: 2003,
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Typography variant='h5' component='h2'>
        Books
      </Typography>
      <Grid container spacing={2} style={{ margin: 0, width: '100%' }}>
        {books.map(({ id, name, year }) => (
          <Book key={id} name={name} year={year} id={id} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
