import { FETCH_LATEST_MOVIES } from '../Actions/actionTypes';
import { FETCH_UPCOMING_MOVIES } from '../Actions/actionTypes';
import { FETCH_POPULAR_MOVIES } from '../Actions/actionTypes';
import { FETCH_TOP_RATED_MOVIES } from '../Actions/actionTypes';

import { FETCH_LATEST_TVSHOWS } from '../Actions/actionTypes';
import { FETCH_UPCOMING_TVSHOWS } from '../Actions/actionTypes';
import { FETCH_POPULAR_TVSHOWS } from '../Actions/actionTypes';
import { FETCH_TOP_RATED_TVSHOWS } from '../Actions/actionTypes';


const initialState={
    LatestMovies: [],
    UpcomingMovies: [],
    PopularMovies: [],
    TopRatedMovies: []
};

export const movieReducers= (state= initialState,action) =>{
    switch(action.type){
        case FETCH_LATEST_MOVIES:
            return {
               ...state,
                LatestMovies: [...action.payload]
            };
        case FETCH_UPCOMING_MOVIES:
            return {
                ...state,
                UpcomingMovies: [...action.payload]
            };
        case FETCH_POPULAR_MOVIES:
            return {
                ...state,
                PopularMovies: [...action.payload]
            };
        case FETCH_TOP_RATED_MOVIES:
            return {
                ...state,
                TopRatedMovies: [...action.payload]
            };


        case FETCH_LATEST_TVSHOWS:
                return {
                    ...state,
                    LatestMovies: [...action.payload]
                };
        case FETCH_UPCOMING_TVSHOWS:
                return {
                    ...state,
                    UpcomingMovies: [...action.payload]
                };
        case FETCH_POPULAR_TVSHOWS:
                return {
                    ...state,
                    PopularMovies: [...action.payload]
                };
        case FETCH_TOP_RATED_TVSHOWS:
                return {
                    ...state,
                    TopRatedMovies: [...action.payload]
                };
        default:
            return state;
           
    }
};

// export const tvShowReducers= (state= initialState,action) =>{
//     switch(action.type){
//         case FETCH_LATEST_TVSHOWS:
//             return {
//                ...state,
//                 LatestMovies: [...action.payload]
//             };
//         case FETCH_UPCOMING_TVSHOWS:
//             return {
//                 ...state,
//                 UpcomingMovies: [...action.payload]
//             };
//         case FETCH_POPULAR_TVSHOWS:
//             return {
//                 ...state,
//                 PopularMovies: [...action.payload]
//             };
//         case FETCH_TOP_RATED_TVSHOWS:
//             return {
//                 ...state,
//                 TopRatedMovies: [...action.payload]
//             };
//         default:
//             return state;
           
//     }
// };
