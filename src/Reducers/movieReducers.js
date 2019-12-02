import { FETCH_LATEST_MOVIES } from '../Actions/actionTypes';
import { FETCH_UPCOMING_MOVIES } from '../Actions/actionTypes';
import { FETCH_POPULAR_MOVIES } from '../Actions/actionTypes';
import { FETCH_TOP_RATED_MOVIES } from '../Actions/actionTypes';

const movieReducers= (state=[],action) =>{
    switch(action.type){
        case 'FETCH_LATEST_MOVIES':
            return [...state, action.payload];
            break;
        case 'FETCH_UPCOMING_MOVIES':
            return [...state, action.payload];
            break;
        case 'FETCH_POPULAR_MOVIES':
            return [...state, action.payload];
            break;
        case 'FETCH_TOP_RATED_MOVIES':
            return [...state, action.payload];
            break;
        default:
            return state;
            break;
    }
};

export default movieReducers;