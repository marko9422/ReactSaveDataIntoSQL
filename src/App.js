import './App.css';
import React from "react"

import Insert from './components/Insert';
import Edit from './components/Edit';
import View from './components/View';

import { Route, Routes, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
return (
<>

<Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand as={Link} to={'/'}>Home</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to={'/'}>List</Nav.Link>
      <Nav.Link as={Link} to={'/insert'}>Insert</Nav.Link>
    </Nav>
  </Container>
</Navbar>


<Routes>
    <Route path={'/'} element={<View/>} />
    <Route path={'/insert'} element={<Insert/>} />
    <Route path={'/edit/:id'} element={<Edit/>} />
</Routes> 

</>
  );
}

export default App;
