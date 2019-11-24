import React from 'react';
import './LatestMovies.scss';
// import sonTung from '../../../../Images/sonTung.jpg'

export const LatestMovies= props =>{
    
    return(
        <section className="latestMovies">
            <section className='w3-display-container'>
                
                <section className='imageMovies' >
                       
                    </section>
                <section className="progress-bar w3-display-topleft"></section>
                
                <section className='infoMovies w3-display-bottomleft '>
                        <h1 className='categoryMovies__titles'>Latest</h1>
                        {/* <p className='infoMovies__titles'>Joker</p> */}
                        <p className='infoMovies__titles'>{props.LatestMovies.title}</p>
                        <span className='infoMovies__categories'>Sports, Documentation | </span>
                        <span><i className='fas fa-heart' style={{ color: '	#e31b23'}}></i>100000 </span>
                        <span><span className="glyphicon glyphicon-time" style={{ color: '#3498db'}}></span>95mins</span>
                    </section>
                </section>
        </section>
    );
}