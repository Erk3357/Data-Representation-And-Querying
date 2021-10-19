import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';


class Read extends Component{

    componentDidMount(){

        //Get JSON BLOB from URL using Axios
        axios.get("https://jsonblob.com/api/jsonblob/894944504570986496")
        //Next steps afer reciving JSON BLOB
        .then((response)=>{
            //Get response and pass it all to mymovies
            this.setState({mymovies: response.data.movies})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    //Define the state of JSX
    state = {
        mymovies: []
            
    }; 

    render(){
        return(
            <div>
                <h1>this is my Read component</h1>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}

export default Read;