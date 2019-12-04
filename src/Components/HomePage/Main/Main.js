import React from 'react';
// import ReactDOM from 'react-dom';


import { connect } from 'react-redux';

import { fetchLatestMovies } from '../../../Actions/fetchActions';
import { fetchUpcomingMovies } from '../../../Actions/fetchActions';
import { fetchPopularMovies } from '../../../Actions/fetchActions';
import { fetchTopRatedMovies } from '../../../Actions/fetchActions';

import { fetchLatestTvShows } from '../../../Actions/fetchActions';
import { fetchUpcomingTvShows } from '../../../Actions/fetchActions';
import { fetchPopularTvShows } from '../../../Actions/fetchActions';
import { fetchTopRatedTvShows } from '../../../Actions/fetchActions';

import { movieDatabases } from '../Util/Tmdb';
import { LatestMovies } from './LatestMovies/LatestMoives';

// import  LatestMovies  from './LatestMovies/LatestMoives';
import { UpcomingMovies } from './UpcomingMovies/UpcomingMovies';
import { PopularMovies } from './PopularMovies/PopularMovies';
import { TopRatedMovies } from './TopRatedMovies/TopRatedMovies';
import './Main.scss';



// React code
class Main extends React.Component {
    constructor(props) {
        super(props);
        // this.handleGenre=this.handleGenre.bind(this);
        this.handleClickTv=this.handleClickTv.bind(this);
        this.handleClickMovies=this.handleClickMovies.bind(this);
        this.state={
            LatestMovies:[],
            // movieLists:[],
            UpcomingMovies: [],
            PopularMovies: [],
            TopRatedMovies: [],
            LastestTvShows:[],
            UpcomingTvShows: [],
            PopularTvshows: [],
            TopRatedTvshows: [],
        };
    }

    componentDidMount() {
        this.props.getLatestMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${movieDatabases.apiKey}&language=en-US&page=1`);
        this.props.getUpcommingMovies();
        this.props.getPopularMovies();
        this.props.getTopRatedMovies();
        // fetch Movie datas
        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then(res =>{
            this.setState({
                LatestMovies: res.results,
             
            })
        });
        
        // movieDatabases.fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`).then(res =>{
        //     this.setState({
        //         movieLists: res.genres
        //     })
        // });
       
        // movieDatabases.fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`).then(res =>{
        //     res.results.map(movie =>{
        //         movieDatabases.fetchList(movie.id,apiKey).then(data =>{
        //             movieGenre.push(data);
        //         });
                
        //     })
        //     this.setState({
        //         movieList: movieGenre
        //     })
        //     console.log(this.state.movieList)
        // });

        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then(res =>{
            this.setState({
                UpcomingMovies: res.results
            })
        });

        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then(res =>{
            this.setState({
                PopularMovies: res.results
            })
        });

        movieDatabases.fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then(res =>{
            this.setState({
                TopRatedMovies: res.results
            })
        });
        
        // fetch TvShows data
        // movieDatabases.fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then( res => {
        //     this.setState({
        //         LastestTvShows: res.results
        //     })
        // })
        // movieDatabases.fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then( res => {
        //     this.setState({
        //         UpcomingTvShows: res.results
        //     })
        // })
        // movieDatabases.fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then( res => {
        //     this.setState({
        //         PopularTvshows: res.results
        //     })
        // })
        // movieDatabases.fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then( res => {
        //     this.setState({
        //         TopRatedTvshows: res.results
        //     })
        // })
    }


    handleClickTv() {
        this.props.getLatestTvShows(`https://api.themoviedb.org/3/tv/airing_today?api_key=${movieDatabases.apiKey}&language=en-US&page=1`);
        this.props.getUpcommingTvShows(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${movieDatabases.apiKey}&language=en-US&page=1`);
        // Fetch TvShow datas
        movieDatabases.fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then( res => {
            this.setState({
                LatestMovies: res.results
            })
        })
        movieDatabases.fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then( res => {
            this.setState({
                UpcomingMovies: res.results
            })
        })
        movieDatabases.fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then( res => {
            this.setState({
                PopularMovies: res.results
            })
        })
        movieDatabases.fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${movieDatabases.apiKey}&language=en-US&page=1`).then( res => {
            this.setState({
                TopRatedMovies: res.results
            })
        })
        //

        document.getElementById('LatestMovies').className="latestMovies latestTvShows";
        document.getElementById('LatestSection__Titles').innerHTML="Airing Today";
        document.getElementById('UpcommingSection__Titles').innerHTML="ON THE AIR";
    }

    handleClickMovies() {
        document.querySelector('.button__tvShow').removeEventListener('click',this.handleClickTv,false);
        document.getElementById('LatestMovies').className="latestMovies";
        document.getElementById('LatestSection__Titles').innerHTML="Latest";
        document.getElementById('UpcommingSection__Titles').innerHTML="UPCOMMING";
        this.componentDidMount();
    }
    // handleGenre(movieId,apiKey) {
    //     movieDatabases.fetchList(movieId,apiKey);
    // }


    // handleGenres() {
    //     const apiKey='f2e86216544164cf2009c966946ce960' ;
    //     const movieList= [];
    //     this.state.LatestMovies.forEach(movie =>{
    //         this.state.movieList.map(data=>{
                
    //         })
    //     });
    //     console.log(movieList)
    // }
   
    render() {
        // const store= createStore(() =>[], {},applyMiddleware(thunk))
        return(
            // <Provider store={store}>
                    <main>
                            <LatestMovies LatestMovies={this.state.LatestMovies} 
                                            />
                            <section className='movies'>
                                <section className='button'>
                                            <button className='button__movies' onClick={this.handleClickMovies} type='button'>MOVIES</button>
                                            <button className='button__tvShow' onClick={this.handleClickTv} type='button'>TV SHOW</button>
                                    </section>
                                    <UpcomingMovies  UpcomingMovies={this.state.UpcomingMovies}/> 
                                    <PopularMovies PopularMovies={this.state.PopularMovies}/>
                                    <TopRatedMovies TopRatedMovies={this.state.TopRatedMovies}/>
                            </section>

                    </main>
                // </Provider>
        );
    }
}

const mapStateToProps= state=> {
    return{
        LatestMovies: state.movie.LatestMovies,
        UpcomingMovies: state.movie.UpcomingMovies,
        PopularMovies: state.movie.PopularMovies,
        TopRatedMovies: state.movie.TopRatedMovies,
    };
};

const mapDispatchToProps= dispatch =>{
    return {
        getLatestMovies: url => dispatch(fetchLatestMovies(url)),
        getUpcommingMovies: () => dispatch(fetchUpcomingMovies()),
        getPopularMovies: () => dispatch(fetchPopularMovies()),
        getTopRatedMovies: () => dispatch(fetchTopRatedMovies()),

        getLatestTvShows: url => dispatch(fetchLatestTvShows(url)),
        getUpcommingTvShows: url => dispatch(fetchUpcomingTvShows(url)),
        getPopularTvShows: url => dispatch(fetchPopularTvShows(url)),
        getTopRatedTvShows: url => dispatch(fetchTopRatedTvShows(url))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Main);
