import React from 'react';
import { LatestMovies } from './LatestMovies/LatestMoives';
import './Main.scss';

class Main extends React.Component {
    render() {
        return(
            <main>
                    <LatestMovies />
                    <button >MOVIES</button>
                    <button >TV SHOW</button> 
            </main>
        );
    }
}

export default Main;