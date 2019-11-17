import React from 'react';
import './UpcomingMovies.scss';

export const UpcomingMovies= props =>{
    return(
        <section>
                <h2>UPCOMING</h2>
                {props.UpcomingMovies.map( item =>{
                    return(
                        <section>
                                <img src={item.imageMovies} />
                                <p>{item.nameMovies}</p>
                                <span>{item.categoryMovies}</span>
                        </section>
                    );
                })}
        </section>
    );
}