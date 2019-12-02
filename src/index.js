import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect} from 'react-redux';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

// // Redux code 
// const LATEST_MOVIES='LATEST_MOVIES';


const LATEST_MOVIES='LATEST_MOVIES';

const latestMovies= (payload) =>{
    return{
        type:LATEST_MOVIES,
        payload
    }
}

const handleLatestMovies= url =>{
    return async dispatch =>{
        try{
            const res= await fetch(url);
            if(res.ok){
                const jsonRes= await res.json();
                console.log(jsonRes);
                dispatch(jsonRes);
            } throw new Error ('Requested Fail!');
        } catch(e){
            console.log(e);
        } 
    }
}

const latestMoviesReducer= (state= [], action) =>{
    switch(action.type){
        case 'LATEST_MOVIES':
            return [...state,action.payload];
            break;
        default:
            return state;
            break;
    }
}

// const store= createStore(latestMoviesReducer,applyMiddleware(ReduxThunk.default));

ReactDOM.render(
    // <Provider store={store}>
        <App />
    // </Provider>
    , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
