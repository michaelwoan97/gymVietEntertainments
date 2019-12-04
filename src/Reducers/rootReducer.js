import { combineReducers } from 'redux';
import { movieReducers, tvShowReducers } from '../Reducers/movieReducers';
// import { movieReducers, tvShowReducers } from '../Reducers/movieReducers';

import { fetchLatestMovies } from '../Actions/fetchActions';
import { fetchUpcomingMovies } from '../Actions/fetchActions';
import { fetchPopularMovies } from '../Actions/fetchActions';
import { fetchTopRatedMovies } from '../Actions/fetchActions';

import { fetchLatestTvShows } from '../Actions/fetchActions';
import { fetchUpcomingTvShows } from '../Actions/fetchActions';
import { fetchPopularTvShows } from '../Actions/fetchActions';
import { fetchTopRatedTvShows } from '../Actions/fetchActions';


export default combineReducers({
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