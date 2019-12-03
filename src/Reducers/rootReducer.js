import { combineReducers } from 'redux';
import movieReducers from '../Reducers/movieReducers';
import { fetchLatestMovies } from '../Actions/fetchActions';
import { fetchUpcomingMovies } from '../Actions/fetchActions';
import { fetchPopularMovies } from '../Actions/fetchActions';
import { fetchTopRatedMovies } from '../Actions/fetchActions';


export default combineReducers({
    movie: movieReducers,
    fetchLatestMovies,
    fetchUpcomingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies
});