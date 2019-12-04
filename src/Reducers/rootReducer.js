import { combineReducers } from 'redux';
import { movieReducers, configureReducer } from '../Reducers/movieReducers';
// import { movieReducers, tvShowReducers } from '../Reducers/movieReducers';

import { fetchConfigureApi } from '../Actions/fetchActions';
import { fetchLatestMovies } from '../Actions/fetchActions';
import { fetchUpcomingMovies } from '../Actions/fetchActions';
import { fetchPopularMovies } from '../Actions/fetchActions';
import { fetchTopRatedMovies } from '../Actions/fetchActions';

import { fetchLatestTvShows } from '../Actions/fetchActions';
import { fetchUpcomingTvShows } from '../Actions/fetchActions';
import { fetchPopularTvShows } from '../Actions/fetchActions';
import { fetchTopRatedTvShows } from '../Actions/fetchActions';


export default combineReducers({
    configure: configureReducer,
    fetchConfigureApi,
    
    movie: movieReducers,
    
    fetchLatestMovies,
    fetchUpcomingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,

    // tvShows: tvShowReducers,

    fetchLatestTvShows,
    fetchUpcomingTvShows,
    fetchPopularTvShows,
    fetchTopRatedTvShows
});