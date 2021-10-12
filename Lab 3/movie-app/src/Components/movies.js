import React, { Component } from 'react';
import MovieItem from './movieItem';

class Movies extends Component{

    render(){
        //Return Mapped Films JSON
        return this.props.films.map((film)=>{
            //Return Movie with unique ID from JSON file - imdbID to avoid infinite loop
            return <MovieItem movie={film} key={film.imdbID}></MovieItem>
        })
    }
}

export default Movies;