import React from 'react';
import './style.css';
// or less ideally
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function App() {
  return (
    <>
      <Navbar className="bg-danger hidden-xs" variant="dark">
        <Navbar.Brand href="#home">RepairA</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link Link="#home">Home</Nav.Link>
          <Nav.Link Link="#features">Features</Nav.Link>
          <Nav.Link Link="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <div className="container">
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Button className="btn btn-danger">Hello </Button>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </>
  );
}
