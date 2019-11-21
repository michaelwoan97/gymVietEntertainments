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
    fetch: async() =>{
        try{
            const response=await fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`);
            if(response.ok){
                console.log(response);
                const jsonResponse= await response.json();
                console.log(jsonResponse);
                return jsonResponse;
            } else { 
                throw new Error('Request Failed!');
            }
        } catch(error) {
            console.log(error);
        }
    }
};
