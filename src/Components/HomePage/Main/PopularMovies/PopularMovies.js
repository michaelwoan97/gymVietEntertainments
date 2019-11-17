import React from 'react';
import './PopularMovies.scss';

export const PopularMovies= props =>{
    return(
        <section>
                <h2>POPULAR</h2>
                {props.PopularMovies.map( item =>{
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