import { FETCH_LATEST_MOVIES } from '../Actions/actionTypes';
import { FETCH_UPCOMING_MOVIES } from '../Actions/actionTypes';
import { FETCH_POPULAR_MOVIES } from '../Actions/actionTypes';
import { FETCH_TOP_RATED_MOVIES } from '../Actions/actionTypes';

const apiKey='f2e86216544164cf2009c966946ce960';

export const fetchLatestMovies= () => dispatch =>{
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
    .then(res => res.json())
    .then( movies =>{
        dispatch({
            type: FETCH_LATEST_MOVIES,
            payload: movies
        })
    });
};

export const fetchUpcomingMovies= () => dispatch =>{
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    .then(res=> res.json())
    .then(movies =>{
        dispatch({
            type: FETCH_UPCOMING_MOVIES,
            payload: movies
        })
    });
};

export const fetchPopularMovies= () => dispatch =>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(res=> res.json())
    .then(movies =>{
        dispatch({
            type: FETCH_POPULAR_MOVIES,
            payload: movies
        })
    });
};

export const fetchTopRatedMovies= () => dispatch =>{
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(res=> res.json())
    .then(movies =>{
        dispatch({
            type: FETCH_TOP_RATED_MOVIES,
            payload: movies
        })
    });
};