import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Footer from'./components/footer.js';
import Content from'./components/content.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">movie-app: Eryk</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Content</Nav.Link>
                  <Nav.Link href="/header">Header</Nav.Link>
                  <Nav.Link href="/footer">Footer</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Switch>
            <Route path='/' component={Content} exact/>
            <Route path='/header' component={Header} exact/>
            <Route path='/footer' component={Footer} exact/>
          </Switch>  

        </div>
      </Router>
    );
  }
}

export default App;
