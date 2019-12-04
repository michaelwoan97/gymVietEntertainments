import React from 'react';
import './TopRatedMovies.scss';

export const TopRatedMovies= props =>{
    return(
        <section className='categoryMovies'>
                <h2 id="TopRatedSection__Titles" className='categoryMovies__titles'>TOP RATED</h2>
                {/* <section className='swipeWraper'>
                        <button><i className='fas fa-angle-left'></i></button>
                        <button><i className='fas fa-angle-right'></i></button>
                    </section> */}
                <section className='categoryMoviesCarousel'>
                  
                        <section className='carouselMovies'>
                                {props.TopRatedMovies.map( (item,i) =>{
                                    return(
                                        <section id='visibilityInfoMovies' className='infoMovies' key={`Movie_`+i}>
                                                <section className='w3-display-container w3-text-white containerImages'>
                                                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.overview} />
                                                            <section className="w3-display-topleft w3-container">
                                                                <span className="material-icons" style={{ color: '#3498db'}}>language</span>
                                                                <span style={{ textTransform: 'uppercase'}}>{item.original_language}</span>
                                                                </section>
                                                    </section>
                                                    <p className='infoMovies__titles'>{item.title || item.name}</p>
                                                    <span>
                                                        <i className='fas fa-heart' style={{ color: '	rgba(227,27,35,0.7)'}}></i>{item.popularity}
                                                        <i className='fa fa-star' style={{ color: 'rgba(254,211,48,0.7)'}}></i>{item.vote_average} 
                                                    </span>
                                                    
                                            </section>
                                    );
                                })}
                            </section>
                       
                        
                        <section className='swipeWraper'>
                                <button><i className='fas fa-angle-left'></i></button>
                                <button><i className='fas fa-angle-right'></i></button>
                            </section>
                            
                            <span className='categoryMovies__seperator'></span>
                    </section>
                    
        </section>
    );
}