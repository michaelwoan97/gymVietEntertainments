import React from 'react';
import './LatestMovies.scss';
// import sonTung from '../../../../Images/sonTung.jpg'

export const LatestMovies= props =>{
    const apiKey='f2e86216544164cf2009c966946ce960' ;
    const movieDatabase={
        fetch: async movieId =>{
            try{
                const response=await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
                if(response.ok){
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
    return(
        <section className="latestMovies">
            <section className='carouselLatestMovies'>
            {props.LatestMovies.map( movie =>{
                return(
                    <section className='w3-display-container'>
                            <section id='background' className='imageMovies' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.poster_path}')` }}></section>
                            <section className="progress-bar w3-display-topleft" ></section>
                            
                            <section className='infoMovies w3-display-bottomleft '>
                                    <h1 className='categoryMovies__titles'>Latest</h1>
                                    <p className='infoMovies__titles'>{movie.title}</p>
                                    <span className='infoMovies__categories'> {movie.release_date} | </span>
                                    {/* <span className='infoMovies__categories'> {movieDatabase.fetch(movie.id).then()} | </span> */}
                                    
                                   
                                   
                                    <span><i className='fas fa-heart' style={{ color: '	#e31b23'}}></i>{movie.popularity} </span>
                                    <span><span className="material-icons" style={{ color: '#3498db'}}>language</span>{movie.original_language}</span>
                                </section>
                        </section>      
                );
            })}
                    
                </section>
        
        </section>
    );
}