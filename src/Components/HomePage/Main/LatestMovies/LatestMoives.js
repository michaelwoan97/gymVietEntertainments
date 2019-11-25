import React from 'react';
import './LatestMovies.scss';
// import sonTung from '../../../../Images/sonTung.jpg'

export const LatestMovies= props =>{
    
    // const movieGenre2=[];
    // props.genreMovies.map(item =>{
    //     props.LatestMovies.map(num =>{
    //         if(num.genre_ids===item.id){
    //             movieGenre2.push(item.name);
    //         }
    //         console.log(num.genre_ids);
    //     })
    // })
    // console.log(movieGenre2);
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
                                    
                                    {/* {props.genreMovies.map(genre =>{
                    
                                       movie.genre_ids.map( item =>{
                                           if(item === genre.id){
                                               movieGenre.push(genre.name);
                                           } 
                                       })
                                       return <span className='infoMovies__categories'> {movieGenre} | </span>;
                                    })} */}
                                    {movie.genre_ids.map(item =>{
                                        //  return <span className='infoMovies__categories'>  | </span>;
                                        const movieGenre=[];
                                       props.genreMovies.map( genre =>{
                                           if(genre.id === item){
                                               movieGenre.push(genre.name);
                                           }
                                       })
                                        return <span className='infoMovies__categories'> {movieGenre} | </span>;
                                    })}
                                    
                                   
                                   
                                    <span><i className='fas fa-heart' style={{ color: '	#e31b23'}}></i>100000 </span>
                                    <span><span className="glyphicon glyphicon-time" style={{ color: '#3498db'}}></span>95mins</span>
                                </section>
                        </section>      
                );
            })}
                    
                </section>
        
        </section>
    );
}