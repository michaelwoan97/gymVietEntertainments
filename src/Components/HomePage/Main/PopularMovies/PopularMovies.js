import React from 'react';
import './PopularMovies.scss';

export const PopularMovies= props =>{
    return(
        <section className='categoryMovies'>
                <h2 className='categoryMovies__titles'>POPULAR</h2>
                {/* <section className='swipeWraper'>
                        <button><i className='fas fa-angle-left'></i></button>
                        <button><i className='fas fa-angle-right'></i></button>
                    </section> */}
                <section className='categoryMoviesCarousel'>
                        
                        <section className='carouselMovies'>       
                                {props.PopularMovies.map( (item,i) =>{
                                    return(
                                        <section id='visibilityInfoMovies' className='infoMovies' key={`Movie_`+i}>
                                            <section className='w3-display-container w3-text-white containerImages'>
                                                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                                                        <section className="w3-display-topleft w3-container">
                                                            <span className="material-icons" style={{ color: '#3498db'}}>language</span>
                                                            <span style={{ textTransform: 'uppercase'}}>{item.original_language}</span>
                                                        </section>
                                                </section>
                                                <p className='infoMovies__titles'>{item.title}</p>
                                                <span>
                                                    <i className='fas fa-heart' style={{ color: '	#e31b23'}}></i>{item.popularity} 
                                                    <i className='far fa-thumbs-up' style={{ color: '#3498db'}}></i>{item.vote_count} 
                                                </span>
                                                
                                        </section>
                                    );
                                })}
                            </section>

                        <span className='categoryMovies__seperator'></span>
                        
                        <section className='swipeWraper'>
                                <button><i className='fas fa-angle-left'></i></button>
                                <button><i className='fas fa-angle-right'></i></button>
                            </section>
                       
                    </section>
        </section>
    );
}