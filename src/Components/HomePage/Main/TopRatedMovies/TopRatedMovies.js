import React from 'react';
import './TopRatedMovies.scss';

export const TopRatedMovies= props =>{
    return(
        <section>
                <h2>TOP RATED</h2>
                {props.TopRatedMovies.map( item =>{
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