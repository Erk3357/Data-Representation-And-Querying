import React, { Component } from 'react';
import axios from 'axios';


class Edit extends Component {
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

    componentDidMount(){
        axios.get('http://localhost:4000/api/books/'+ this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Title:response.data.Title,
                Publisher:response.data.Publisher,
                Year:response.data.Year,
                Cover:response.data.Cover,
                _id:response.data._id
            })
        })
        .catch();
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

        axios.put('http://localhost:4000/api/books/' + this.state._id, NewBook)
        .then((response)=>{console.log(response)})
        .catch();
        

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
                <h1>Edit Book Data</h1>
                <br></br>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Edit Book Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeBookName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Book Publisher: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Publisher}
                            onChange={this.onChangeBookPublisher}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Book Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeBookYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Book Cover: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Edit Book"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;