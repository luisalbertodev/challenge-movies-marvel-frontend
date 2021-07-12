/* eslint-disable camelcase */
import { FC } from 'react';
import { MoviesProvider } from 'services/movies';

import Layout from 'components/Layout';
import { ListMovies } from './components';
import * as S from './Main.sc';

interface Props {}

const Main: FC<Props> = () => {
  return (
    <Layout>
      <MoviesProvider>
        <ListMovies />
      </MoviesProvider>
    </Layout>
  );
};

export default Main;
