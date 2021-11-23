import React, { Component } from 'react';
import MovieItem from './movieitem';

class Movies extends Component
{
    render(){
        return this.props.films.map((film)=>{
            //from import get a parent method "ReloadData" and pass it
            return <MovieItem movie={film} ReloadData={this.props.ReloadData} key={film._id}></MovieItem>
        })
    }
}
export default Movies;