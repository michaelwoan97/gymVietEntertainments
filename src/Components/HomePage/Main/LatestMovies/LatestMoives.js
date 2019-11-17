import React from 'react';
import './LatestMovies.scss';

export const LatestMovies= props =>{
    return(
        <section>
            <section className="progress-bar">

            </section>

            <section>
                <h1>Latest</h1>
                <p>Generation Iron</p>
                <span>Sports |</span>
                <span><i className='fas fa-heart'></i>100000</span>
                <span className="glyphicon glyphicon-time">95mins</span>
            </section>
        </section>
    );
}