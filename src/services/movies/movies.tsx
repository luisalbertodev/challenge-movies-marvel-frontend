import message from 'antd/lib/message';
import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
  FC,
  ReactElement
} from 'react';
import fetchService from 'utils/fetchService';
import { IMovie, IJsonMovie } from 'types/Movie';

interface IInitialReducer {
  isLoading: boolean;
  hasMore: boolean;
  movies: IMovie[];
}

interface Props {
  getMovies?: (page?: number, prevMovies?: IMovie[]) => any;
  children: ReactElement | any;
}

interface IContext {
  getMovies?: (page?: number, prevMovies?: IMovie[]) => any;
  loadMore?: () => void;
  state: IInitialReducer;
}

interface IFetchMovies {
  page: number;
  hasMore: boolean;
  movies: IMovie[];
}

const MoviesContext = createContext<IContext | null>(null);

const actions: { [key: string]: string } = {
  SET_MOVIES: 'SET_MOVIES',
  RESET_MOVIES: 'RESET_MOVIES',
  INITIALIZE_FETCH: 'INITIALIZE_FETCH'
};

const initialState: IInitialReducer = { movies: [], hasMore: false, isLoading: true };

function reducer(state, action) {
  switch (action.type) {
    case actions.SET_MOVIES:
      return {
        ...state,
        ...action.payload
      };
    case actions.RESET_MOVIES:
      return {
        ...state,
        movies: []
      };
    case actions.INITIALIZE_FETCH:
      return {
        ...state,
        ...action.payload
      };
    default:
      throw new Error();
  }
}

export const MoviesProvider: FC<Props> = (props) => {
  const [currentPage, setPage] = useState<number>(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadMore = () => {
    const lastPage = currentPage + 1;

    dispatch({ type: actions.INITIALIZE_FETCH, payload: { isLoading: true } });
    getMovies(lastPage, state.movies).then(({ page, ...response }: IFetchMovies) => {
      setPage(page);
      dispatch({ type: actions.SET_MOVIES, payload: { ...response, isLoading: false } });
    });
  };

  useEffect(() => {
    getMovies().then(({ page, ...response }: IFetchMovies) => {
      dispatch({ type: actions.SET_MOVIES, payload: { ...response, isLoading: false } });
    });
  }, []);

  const value = {
    state,
    loadMore,
    getMovies: props.getMovies || getMovies
  };

  return <MoviesContext.Provider value={value}>{props.children}</MoviesContext.Provider>;
};

export const useMovies = () => {
  const context = useContext(MoviesContext) as IContext;

  if (!context) {
    throw new Error('MoviesContext must be used within a MoviesProvider');
  }

  return context;
};

const getMovies = async (page = 1, prevMovies = []): Promise<IFetchMovies> => {
  const obj: IFetchMovies = { hasMore: true, movies: prevMovies, page };

  try {
    const { dataSource, metadata }: IJsonMovie = await fetchService(
      `/api/v1/movie/page/${page}`,
      'GET'
    );

    if (prevMovies.length >= metadata.documents) obj.hasMore = false;
    obj.movies = dataSource.concat(prevMovies);

    return obj;
  } catch (error) {
    message.error(error.message ?? 'Hubo un error, intenta nuevamente');
    return obj;
  }
};
