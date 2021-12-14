import React, { Component } from 'react';
import ODL from './ODL.svg';

class Content extends Component {
    render() {
        return (
            <div>
                <br></br>
                <img src={ODL} width="250" alt=""></img>
                <br></br>
                <br></br>
                <br></br>
                <h1>Welcome to ODL-DB managment Portal</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Content;