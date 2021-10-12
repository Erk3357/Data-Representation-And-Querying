import './App.css';
//Import React Component from React library
import React, { Component } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component{

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {/* Create Navs that will replace the componets via user root*/}
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/header">header</Nav.Link>
                  <Nav.Link href="/footer">footer</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/*Switch Between different componetns (guide for Router*/}
          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/header' component={Header}></Route>
            <Route path='/footer' component={Footer}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
