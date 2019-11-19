import React from 'react';
import './PopularMovies.scss';

export const PopularMovies= props =>{
    return(
        <section className='categoryMovies'>
                <h2 className='categoryMovies__titles'>POPULAR</h2>
                <section className='swipeWraper'>
                        <button><i className='fas fa-angle-left'></i></button>
                        <button><i className='fas fa-angle-right'></i></button>
                    </section>
                <section className='categoryMoviesCarousel'>
                        
                        <section className='carouselMovies'>       
                                {props.PopularMovies.map( item =>{
                                    return(
                                        <section className='infoMovies'>
                                                <section className='containerImages'>
                                                        <img src={item.imageMovies} />
                                                </section>
                                                <p className='infoMovies__titles'>{item.nameMovies}</p>
                                                <span className='infoMovies__categories'>{item.categoryMovies}</span>
                                        </section>
                                    );
                                })}
                            </section>
                       
                    </section>
        </section>
    );
}