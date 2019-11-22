import React from 'react';
import { movieDatabases } from '../Util/Tmdb';
import { LatestMovies } from './LatestMovies/LatestMoives';
import { UpcomingMovies } from './UpcomingMovies/UpcomingMovies';
import { PopularMovies } from './PopularMovies/PopularMovies';
import { TopRatedMovies } from './TopRatedMovies/TopRatedMovies';
import terminator from '../../../Images/terminator.jpeg';
import coleman from '../../../Images/coleman.jpg';
import AvengerEndgame from '../../../Images/AvengerEndgame.jpeg';
import fast7 from '../../../Images/fast7.jpg';
import fast6 from '../../../Images/fast6.jpg';
import gfg from '../../../Images/gfg.jpg';
import sonTung from '../../../Images/sonTung.jpg';
import ironMan from '../../../Images/ironMan.jpg';
import panda from '../../../Images/panda.jpeg';
import rushHour from '../../../Images/rushHour.jpg';
import nwa from '../../../Images/nwa.jpeg';
import hulk from '../../../Images/hulk.jpg';


import './Main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            LatestMovies:[],
            LatestMovies2:[],
            UpcomingMovies: [
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: AvengerEndgame},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: fast7},
            ],
            PopularMovies: [
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: sonTung},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: fast6},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: gfg},
            ],
            TopRatedMovies: [
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: ironMan},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: coleman},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: panda},
            ]
        };
    }

    componentDidMount() {
        const apiKey='f2e86216544164cf2009c966946ce960' ;
        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`).then(res =>{
            this.setState({
                LatestMovies: res.results[0]
                // LatestMovies: res.results
            })
        });
        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/475557/images?api_key=${apiKey}&language=en-US`).then(res =>{
            this.setState({
                LatestMovies2: res
            })
        });
       
    }

    render() {
        
        return(
            <main>
                    <LatestMovies LatestMovies={this.state.LatestMovies}/>
                    <section className='movies'>
                        <section className='button'>
                                    <button className='button__movies' type='button'>MOVIES</button>
                                    <button className='button__tvShow' type='button'>TV SHOW</button>
                            </section>
                            <UpcomingMovies  UpcomingMovies={this.state.UpcomingMovies}/> 
                            <PopularMovies PopularMovies={this.state.PopularMovies}/>
                            <TopRatedMovies TopRatedMovies={this.state.TopRatedMovies}/>
                    </section>
            </main>
        );
    }
}

export default Main;