import React from 'react';
import { movieDatabases } from '../../Util/Tmdb';
import './LatestMovies.scss';
// import sonTung from '../../../../Images/sonTung.jpg'

export const LatestMovies= props =>{
    // const apiKey='f2e86216544164cf2009c966946ce960' ;
    // const movieList= [];
    // props.LatestMovies.forEach(movie =>{
    //     props.handleGenre(movie.id,apiKey).then(data=>{

    //     })
    // });
    // console.log(movieList)
    return(
        <section className="latestMovies">
            <section className='carouselLatestMovies'>
            {props.LatestMovies.map( movie =>{
                return(
                    <section className='w3-display-container'>
                            <section id='background' className='imageMovies' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.poster_path}')` }}></section>
                            <section className="progress-bar w3-display-topleft" ></section>
                            
                            <section className='infoMovies w3-display-bottomleft '>
                                    <h1 className='categoryMovies__titles'>Latest</h1>
                                    <p className='infoMovies__titles'>{movie.title}</p>
                                    <span className='infoMovies__categories'> {movie.release_date} | </span>
                                    <span><i className='fas fa-heart' style={{ color: '	#e31b23'}}></i>{movie.popularity} </span>
                                    <span><span className="material-icons" style={{ color: '#3498db'}}>language</span>{movie.original_language}</span>
                                </section>
                        </section>      
                );
            })}
                    
                </section>
        
        </section>
    );
}

// class LatestMovies extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             movieLists:[]
//         }
//     }
//     componentDidMount(){
//         const apiKey='f2e86216544164cf2009c966946ce960' ;
//         const movieList=[];
//         this.props.LatestMovies.map(movie =>{
//             movieDatabases.fetchList(movie.id,apiKey).map(data =>{
//                 movieList.push(data);
//             })
//         })
//         this.setState({
//             movieLists: movieList
//         })
//         console.log(this.state.movieLists)
//     }

//     render() {
//         return(
//             <section className="latestMovies">
//                     <section className='carouselLatestMovies'>
//                     {this.props.LatestMovies.map( movie =>{
//                         return(
//                             <section className='w3-display-container'>
//                                     <section id='background' className='imageMovies' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.poster_path}')` }}></section>
//                                     <section className="progress-bar w3-display-topleft" ></section>
                                    
//                                     <section className='infoMovies w3-display-bottomleft '>
//                                             <h1 className='categoryMovies__titles'>Latest</h1>
//                                             <p className='infoMovies__titles'>{movie.title}</p>
//                                             <span className='infoMovies__categories'> 
//                                             </span>
//                                             <span><i className='fas fa-heart' style={{ color: '	#e31b23'}}></i>{movie.popularity} </span>
//                                             <span><span className="material-icons" style={{ color: '#3498db'}}>language</span>{movie.original_language}</span>
//                                         </section>
//                                 </section>      
//                         );
//                     })}
                            
//                         </section>
                
//                 </section>
//         );
//     }
// }

// export default LatestMovies;