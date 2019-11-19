import React from 'react';
import './LatestMovies.scss';
// import sonTung from '../../../../Images/sonTung.jpg'

export const LatestMovies= props =>{
    return(
        <section className="latestMovies">
            <section className="progress-bar">

            </section>
            <section className='imageMovies'>
                    {/* <img src={sonTung} alt='Chang trai nam ay'/> */}
            </section>
            <section className='infoMovies'>
                <h1 className='categoryMovies__titles'>Latest</h1>
                <p className='infoMovies__titles'>Generation Iron</p>
                <span className='infoMovies__categories'>Sports, Documentation | </span>
                <span><i className='fas fa-heart' style={{ color: '	#e31b23'}}></i>100000 </span>
                <span><span className="glyphicon glyphicon-time" style={{ color: '#3498db'}}></span>95mins</span>
            </section>
        </section>
    );
}