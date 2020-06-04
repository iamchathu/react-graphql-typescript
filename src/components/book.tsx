import React from 'react';
import Card from '@material-ui/core/Card';

interface Props {
  name: string;
}

const Book: React.FC<Props> = ({ name }) => {
  return <Card>{name}</Card>;
};

export default Book;
