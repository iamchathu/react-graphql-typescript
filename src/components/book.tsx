import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
}));

interface Props {
  id: string;
  name: string;
  year: number;
}

const Book: React.FC<Props> = ({ id, name, year }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3}>
      <Link
        component={RouterLink}
        to={`/books/${id}`}
        style={{
          color: 'inherit',
          textDecoration: 'none',
          cursor: 'hand',
        }}>
        <Card className={classes.card}>
          <Typography variant='subtitle1'>{name}</Typography>
          <Typography variant='body2' color='textSecondary'>
            {year}
          </Typography>
        </Card>
      </Link>
    </Grid>
  );
};

export default Book;
