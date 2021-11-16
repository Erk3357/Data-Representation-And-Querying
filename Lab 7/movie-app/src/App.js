import './App.css';
//Import React Component from React library
import React, { Component } from 'react';
import Read from './Components/read';
import Create from './Components/create';
import Content from './Components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends Component{

  render(){
    return (
      //Create Router to help React replace content
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
                  <Nav.Link href="/read">Read</Nav.Link>
                  <Nav.Link href="/create">Create</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/*Switch Between different componetns (guide for Router*/}
          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/read' component={Read}></Route>
            <Route path='/create' component={Create}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
