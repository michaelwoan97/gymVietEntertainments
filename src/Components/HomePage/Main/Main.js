import React from 'react';
import { LatestMovies } from './LatestMovies/LatestMoives';
import { UpcomingMovies } from './UpcomingMovies/UpcomingMovies';
import { PopularMovies } from './PopularMovies/PopularMovies';
import { TopRatedMovies } from './TopRatedMovies/TopRatedMovies';
import terminator from '../../../Images/terminator.jpeg';
import './Main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            UpcomingMovies: [
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
            ],
            PopularMovies: [
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
            ],
            TopRatedMovies: [
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
                {nameMovies: 'Never Give Up', categoryMovies: 'Sport / documentation', imageMovies: terminator},
            ]
        };
    }
    render() {
        return(
            <main>
                    <LatestMovies />
                    <button >MOVIES</button>
                    <button >TV SHOW</button>
                    <UpcomingMovies  UpcomingMovies={this.state.UpcomingMovies}/> 
                    <PopularMovies PopularMovies={this.state.PopularMovies}/>
                    <TopRatedMovies TopRatedMovies={this.state.TopRatedMovies}/>
            </main>
        );
    }
}

export default Main;