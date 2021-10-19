import React, { Component } from 'react';

class Create extends Component {

    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        this.state = {Title:"",
                      Year:"",
                      Poster:""
        }
    }

    handleSubmit(event) {
        console.log(this.state.Title, this.state.Year, this.state.Poster);
        event.preventDefault();
        
    }

    onChangeMovieName(event){
        this.setState({
            Title: event.target.value
        })
    }

    onChangeMovieYear(event){
        this.setState({
            Year: event.target.value
        })
    }

    onChangeMoviePoster(event){
        this.setState({
            Poster: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>this is my Create component</h1>
                {/* Create form for movie data*/}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster URL: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>

                    <div>
                        <br></br>
                        <input type="submit" value="Add Movie" className="btn btn-primary">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default Create;