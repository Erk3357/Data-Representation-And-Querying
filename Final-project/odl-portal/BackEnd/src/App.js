import React, { Component } from 'react';
import './App.css';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Database from './components/Database';
import Add from './components/add';
import Edit from './components/edit';
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/"><img src={logo} width="30"
        height="30" className="d-inline-block align-top" alt=""></img><b> ODL</b> portal</Navbar.Brand>
            <Nav className="me-right">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Database">Database</Nav.Link>
              <Nav.Link href="/Add">Add</Nav.Link>
            </Nav>
            <Nav className="me-left">
              <Nav.Link>{new Date().toLocaleTimeString()}</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact><Content /></Route>
          <Route path="/Add"><Add></Add></Route>
          <Route path="/Database"><Database></Database></Route>
          <Route path={"/edit/:id"} component={Edit}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;