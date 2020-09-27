import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class Navbarsite extends React.Component{

render(){

return(
		
		<Navbar expand="lg" className="blackbackground fixed-top">
  <Navbar.Brand className="light text-white" href="#home">MILTON LIMA</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" id="navlinks">
      <Nav.Link href="#sobrecontainerid" className="linkfontcolor">Sobre</Nav.Link>
      <Nav.Link href="#portfoliotitle" className="linkfontcolor">Portfolio</Nav.Link>
      <Nav.Link href="#contatoid" className="linkfontcolor">Contato</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
	)

}

}

export default Navbarsite;
