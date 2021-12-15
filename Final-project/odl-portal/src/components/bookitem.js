import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// some comments
class BookItem extends Component {
    constructor(){
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
        this.style = {
            width: "18rem",
            float: "left",
         };
    }


    DeleteBook(){
        console.log('Delete: '+this.props.book._id);

        axios.delete('http://localhost:4000/api/books/'+this.props.book._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();

    }

    render() {
        return (
            <div class="card" style={this.style}>
            <img src={this.props.book.Cover} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">{this.props.book.Title}</h5>
              <p class="card-text"><b>{this.props.book.Publisher}</b></p>
              <p class="card-text">{this.props.book.Year}</p>
              <div className="d-flex justify-content-evenly">
              <div><Link to={"/edit/" +this.props.book._id} className="btn btn-primary">Edit</Link></div>
              <div><Button variant="danger" onClick={this.DeleteBook}>Delete</Button></div>
              </div>
          </div>
          </div>
        );
    }
}
export default BookItem;