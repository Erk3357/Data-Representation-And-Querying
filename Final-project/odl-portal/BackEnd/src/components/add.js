import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeBookPublisher = this.onChangeBookPublisher.bind(this);
        this.onChangeBookYear = this.onChangeBookYear.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.state = {
            Title: '',
            Publisher: '',
            Year: '',
            Cover: ''
        }
    }

    handleSubmit(event) {
        console.log("Name: " +this.state.Title+
        "Publisher: " +this.state.Publisher+
        " Year: " + this.state.Year +
        "Cover: " + this.state.Cover);

        const NewBook = {
            Title: this.state.Title,
            Publisher: this.state.Publisher,
            Year: this.state.Year,
            Cover: this.state.Cover
        }

        axios.post('http://localhost:4000/api/books', NewBook)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err);
        })

        event.preventDefault();
        this.setState({
            Title:'',
            Publisher:'',
            Year:'',
            Cover:''
        });
    }
    onChangeBookName(event) {
        this.setState({
            Title: event.target.value
        })
    }
    onChangeBookPublisher(event) {
        this.setState({
            Publisher: event.target.value
        })
    }
    onChangeBookYear(event) {
        this.setState({
            Year: event.target.value
        })
    }
    onChangeBookCover(event){
        this.setState({
            Cover: event.target.value
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>Add Book to Database:</h1>
                <br></br>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label><b>Add Book Name: </b></label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeBookName}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label><b>Add Publisher Name: </b></label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Publisher}
                            onChange={this.onChangeBookPublisher}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label><b>Add Book Year: </b></label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeBookYear}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label><b>Add Book Cover: </b></label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <br></br>
                    <div>
                        <input type="submit" value="Add Book"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Add;