import React from 'react';
import './PopularMovies.scss';

export const PopularMovies= props =>{
    return(
        <section>
                <h2 className='categoryMovies__titles'>POPULAR</h2>
                {props.PopularMovies.map( item =>{
                    return(
                        <section >
                                <img src={item.imageMovies} />
                                <p className='infoMovies__titles'>{item.nameMovies}</p>
                                <span className='infoMovies__categories'>{item.categoryMovies}</span>
                        </section>
                    );
                })}
        </section>
    );
}