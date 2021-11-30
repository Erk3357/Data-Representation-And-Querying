import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class MovieItem extends Component {

    //reate constructor for DeleteMovie method
    constructor(){
        super()
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //DeleteMovie Method
    DeleteMovie(){
        //Create a console message informing about movie deletion
        console.log("Delete Movie: "+ this.props.movie._id);

        //using axios delete movie from local host 4000
        axios.delete("http://localhost:4000/api/movies/"+ this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>
                
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.Poster} alt=""></img>
                            <footer>
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default MovieItem;