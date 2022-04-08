//import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './Home';
import About from './About';
import Users from './Users';

function App() {
  return (
    <div>
      <Router>
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href=".">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href=".">Home</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
      <Nav.Link href="users">Users</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Routes>
  <Route path='/about' element = {<About/>}></Route>
  <Route path='/users' element = {<Users/>}></Route>
  <Route path='/' element = {<Home/>}></Route>
  </Routes>
  </Router>
    </div>
  );
}

export default App;
