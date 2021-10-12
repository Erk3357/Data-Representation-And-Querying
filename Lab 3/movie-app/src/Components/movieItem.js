import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class MovieItem extends Component{

    render(){
        return(
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.movie.Poster} alt=""></img>
                        <footer className="blockquote-footer">
                            <p>{this.props.movie.Year}</p>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MovieItem;