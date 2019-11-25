import React from 'react';
import { movieDatabases } from '../Util/Tmdb';
import { LatestMovies } from './LatestMovies/LatestMoives';
import { UpcomingMovies } from './UpcomingMovies/UpcomingMovies';
import { PopularMovies } from './PopularMovies/PopularMovies';
import { TopRatedMovies } from './TopRatedMovies/TopRatedMovies';



import './Main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            genreMovies: [],
            LatestMovies:[],
            UpcomingMovies: [],
            PopularMovies: [],
            TopRatedMovies: []
        };
    }

    componentDidMount() {
        const apiKey='f2e86216544164cf2009c966946ce960' ;
        movieDatabases.fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&&language=en-US`).then(res =>{
            this.setState({
                genreMovies: res.genres
            })
        });

        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`).then(res =>{
            this.setState({
                LatestMovies: res.results
            })
        });
        
        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`).then(res =>{
            this.setState({
                UpcomingMovies: res.results
            })
        });

        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`).then(res =>{
            this.setState({
                PopularMovies: res.results
            })
        });

        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`).then(res =>{
            this.setState({
                TopRatedMovies: res.results
            })
        });

      
       
    }

    handleHidden() {

    }

    render() {
        
        return(
            <main>
                    <LatestMovies LatestMovies={this.state.LatestMovies}
                                    genreMovies={this.state.genreMovies}/>
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