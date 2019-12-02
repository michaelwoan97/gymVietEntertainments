import { combineReducers } from 'redux';
import movieReducers from '../Reducers/movieReducers';

export default combineReducers({
    movie: movieReducers
})