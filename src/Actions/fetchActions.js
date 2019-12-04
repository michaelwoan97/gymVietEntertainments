import { CONFIGURE_API } from '../Actions/actionTypes'

import { FETCH_LATEST_MOVIES } from '../Actions/actionTypes';
import { FETCH_UPCOMING_MOVIES } from '../Actions/actionTypes';
import { FETCH_POPULAR_MOVIES } from '../Actions/actionTypes';
import { FETCH_TOP_RATED_MOVIES } from '../Actions/actionTypes';

import { FETCH_LATEST_TVSHOWS } from '../Actions/actionTypes';
import { FETCH_UPCOMING_TVSHOWS } from '../Actions/actionTypes';
import { FETCH_POPULAR_TVSHOWS } from '../Actions/actionTypes';
import { FETCH_TOP_RATED_TVSHOWS } from '../Actions/actionTypes';

const apiKey='f2e86216544164cf2009c966946ce960';

export const fetchConfigureApi= () => dispatch=>{
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
    .then(res=> res.json())
    .then( item=>{
        dispatch({
            type: CONFIGURE_API,
            payload: item.images
        })
    }).catch( error=> console.log(error));
};

export const fetchLatestMovies= url =>{
    return dispatch =>{
        console.log('123');
        fetch(url)
        .then(res => res.json())
        .then( movies =>{
            dispatch({
                type: FETCH_LATEST_MOVIES,
                payload: movies.results
            })
        }).catch(error => console.log(error));
    }
};

export const fetchUpcomingMovies= () => dispatch =>{
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    .then(res=> res.json())
    .then(movies =>{
        dispatch({
            type: FETCH_UPCOMING_MOVIES,
            payload: movies.results
        })
    }).catch(error => console.log(error));
};

export const fetchPopularMovies= () => dispatch =>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(res=> res.json())
    .then(movies =>{
        dispatch({
            type: FETCH_POPULAR_MOVIES,
            payload: movies.results
        })
    }).catch(error => console.log(error));
};

export const fetchTopRatedMovies= () => dispatch =>{
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(res=> res.json())
    .then(movies =>{
        dispatch({
            type: FETCH_TOP_RATED_MOVIES,
            payload: movies.results
        })
    }).catch(error => console.log(error));
};


export const fetchLatestTvShows= url =>{
    return dispatch =>{
        fetch(url)
        .then(res => res.json())
        .then( show =>{
            dispatch({
                type: FETCH_LATEST_TVSHOWS,
                payload: show.results
            })
        }).catch(error => console.log(error));
    }
};


export const fetchUpcomingTvShows= url =>{
    return dispatch =>{
        fetch(url)
        .then(res => res.json())
        .then( show =>{
            dispatch({
                type: FETCH_UPCOMING_TVSHOWS,
                payload: show.results
            })
        }).catch(error => console.log(error));
    }
};

export const fetchPopularTvShows= url =>{
    return dispatch =>{
        fetch(url)
        .then(res => res.json())
        .then( show =>{
            dispatch({
                type: FETCH_POPULAR_TVSHOWS,
                payload: show.results
            })
        }).catch(error => console.log(error));
    }
};

export const fetchTopRatedTvShows= url =>{
    return dispatch =>{
        fetch(url)
        .then(res => res.json())
        .then( show =>{
            dispatch({
                type: FETCH_TOP_RATED_TVSHOWS,
                payload: show.results
            })
        }).catch(error => console.log(error));
    }
};
