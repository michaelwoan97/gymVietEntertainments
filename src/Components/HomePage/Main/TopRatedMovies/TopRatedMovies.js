import React from 'react';
import './TopRatedMovies.scss';

export const TopRatedMovies= props =>{
    return(
        <section>
                <h2 className='categoryMovies__titles'>TOP RATED</h2>
                {props.TopRatedMovies.map( item =>{
                    return(
                        <section>
                                <img src={item.imageMovies} />
                                <p className='infoMovies__titles'>{item.nameMovies}</p>
                                <span className='infoMovies__categories'>{item.categoryMovies}</span>
                        </section>
                    );
                })}
        </section>
    );
}