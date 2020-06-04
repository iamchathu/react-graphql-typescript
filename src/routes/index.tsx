import React, { lazy } from 'react';
import Home from '../containers/home';

const BookDetail = lazy(() => import('../containers/book-detail'));

export const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
    parent: null,
  },
  {
    path: '/book/:bookId',
    exact: true,
    component: () => <BookDetail />,
    parent: null,
  },
];
