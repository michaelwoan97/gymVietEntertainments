
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

export default latestMoviesReducer;