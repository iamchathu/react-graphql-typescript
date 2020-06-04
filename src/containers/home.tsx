import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Book from '../components/book';
import Loading from '../components/loading';

const ALL_BOOKS = gql`
  query AllBooks {
    books {
      id
      name
      year
    }
  }
`;

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_BOOKS);

  if (loading) return <Loading />;

  if (error) return <>Error </>;

  return (
    <>
      <Typography variant='h5' component='h2'>
        Books
      </Typography>
      <Grid container spacing={2} style={{ margin: 0, width: '100%' }}>
        {data?.books.map(
          ({ id, name, year }: { id: string; name: string; year: number }) => (
            <Book key={id} name={name} year={year} id={id} />
          ),
        )}
      </Grid>
    </>
  );
};

export default Home;
