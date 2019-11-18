import React from 'react';
import './UpcomingMovies.scss';

export const UpcomingMovies= props =>{
    return(
        <section>
                <h2 className='categoryMovies__titles'>UPCOMING</h2>
                {props.UpcomingMovies.map( item =>{
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