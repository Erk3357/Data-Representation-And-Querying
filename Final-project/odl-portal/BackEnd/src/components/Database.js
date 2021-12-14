import React, { Component } from 'react';
import Books from './books';
import axios from 'axios';

class Database extends Component
{
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({mybooks: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({mybooks: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mybooks: []            
    };

    render(){
        return(
            <div className="text-center">
            <div>
                <h1>Books within Database:</h1>
                <Books books={this.state.mybooks} ReloadData={this.ReloadData}></Books>
            </div>
            </div>
        );
    }
}
export default Database;