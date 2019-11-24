import React from 'react';
import './TopRatedMovies.scss';

export const TopRatedMovies= props =>{
    return(
        <section className='categoryMovies'>
                <h2 className='categoryMovies__titles'>TOP RATED</h2>
                {/* <section className='swipeWraper'>
                        <button><i className='fas fa-angle-left'></i></button>
                        <button><i className='fas fa-angle-right'></i></button>
                    </section> */}
                <section className='categoryMoviesCarousel'>
                  
                        <section className='carouselMovies'>
                                {props.TopRatedMovies.map( item =>{
                                    return(
                                        <section className='infoMovies'>
                                                <section className='w3-display-container w3-text-white containerImages'>
                                                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                                                        <section className="w3-display-topleft w3-container"><span >Ep 10</span></section>
                                                </section>
                                                <p className='infoMovies__titles'>{item.title}</p>
                                                <span className='infoMovies__categories'>{item.categoryMovies}</span>
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