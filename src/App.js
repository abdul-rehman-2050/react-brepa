import React from 'react';
import './style.css';
// or less ideally
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="container">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button className="btn btn-danger">Hello </Button>
    </div>
  );
}
