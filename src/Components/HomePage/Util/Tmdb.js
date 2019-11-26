const apiKey='f2e86216544164cf2009c966946ce960' ;

// const movieDatabases= async () =>{
//     try{
//         const response= await fetch('https://api.themoviedb.org/3/movie/550?api_key=f2e86216544164cf2009c966946ce960');
//             if(response.ok){
//                 return response.json();
//             }
//             throw new Error('Request failed!');
//     } catch(error) {
//         console.log(error);
//     }
// }

export const movieDatabases={
    fetch: async url =>{
        try{
            const response=await fetch(url);
            if(response.ok){
                const jsonResponse= await response.json();
           
                return jsonResponse;
            } else { 
                throw new Error('Request Failed!');
            }
        } catch(error) {
            console.log(error);
        }
    },
    fetchList: async (movieId,apiKey) =>{
        try{
            const response= await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US&page=1`);
            if(response.ok){
                const jsonResponse= await response.json();
                return jsonResponse;
            } else{
                throw new Error ('Requested Fail!');
            }
        } catch(e){
            console.log(e);
        }
    }
};
