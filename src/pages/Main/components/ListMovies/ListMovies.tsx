/* eslint-disable camelcase */
import InfiniteScroll from 'react-infinite-scroller';

import { useMovies } from 'services/movies';
import { IMovie } from 'types/Movie';

import List from 'antd/lib/list';

import Spin from 'antd/lib/spin';
import Collapse from 'antd/lib/collapse';

import { NotFoundMoreData, CollapsePanelBody, CollapsePanelHeader } from '../../components';
import * as S from './ListMovies.sc';

const ListMovies = () => {
  const gMovies = useMovies();

  return (
    <S.WrapperInfiniteScroll>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={gMovies.loadMore}
        hasMore={!gMovies.state.isLoading && gMovies.state.hasMore}
        useWindow={false}
      >
        <List
          dataSource={gMovies.state.movies}
          renderItem={(
            { _id, cover_url, title, overview, release_date, duration, directed_by }: IMovie,
            key: number
          ) => (
            <List.Item key={_id + key}>
              <Collapse className="w-100">
                <Collapse.Panel
                  header={
                    <CollapsePanelHeader
                      title={title}
                      releaseDate={release_date}
                      duration={duration}
                      coverUrl={cover_url}
                    />
                  }
                  key="1"
                >
                  <CollapsePanelBody
                    title={title}
                    overview={overview}
                    coverUrl={cover_url}
                    directedBy={directed_by}
                  />
                </Collapse.Panel>
              </Collapse>
            </List.Item>
          )}
        >
          {gMovies.state.isLoading && gMovies.state.hasMore && (
            <S.LoadingContainer>
              <Spin />
            </S.LoadingContainer>
          )}
          {!gMovies.state.hasMore && <NotFoundMoreData />}
        </List>
      </InfiniteScroll>
    </S.WrapperInfiniteScroll>
  );
};
export default ListMovies;
