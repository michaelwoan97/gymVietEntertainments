import { FETCH_LATEST_MOVIES } from '../Actions/actionTypes';
import { FETCH_UPCOMING_MOVIES } from '../Actions/actionTypes';
import { FETCH_POPULAR_MOVIES } from '../Actions/actionTypes';
import { FETCH_TOP_RATED_MOVIES } from '../Actions/actionTypes';

const initialState={

}

const movieReducers= (state= initialState,action) =>{
    switch(action.type){
        case 'FETCH_LATEST_MOVIES':
            return {
               ...state,
                LatestMovies: [...action.payload]
            };
        case 'FETCH_UPCOMING_MOVIES':
            return {
                ...state,
                UpcomingMovies: [...action.payload]
            };
        case 'FETCH_POPULAR_MOVIES':
            return {
                ...state,
                PopularMovies: [...action.payload]
            };
        case 'FETCH_TOP_RATED_MOVIES':
            return {
                ...state,
                TopRatedMovies: [...action.payload]
            };
        default:
            return state;
            break;
    }
};

export default movieReducers;