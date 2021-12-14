import React, { Component } from 'react';
import BookItem from './bookitem';

class Books extends Component
{
    render(){
        return this.props.books.map((book)=>{
            return <BookItem book={book} key={book._id} ReloadData={this.props.ReloadData}></BookItem>
        })
    }
}
export default Books;