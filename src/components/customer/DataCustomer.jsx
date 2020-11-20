
/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Container,Row, Button, Modal, Col, Form, Jumbotron} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import Profile from '../images/CreateFoto.svg';
import "../css/styles.css";
import history from './../../history';

const DataCustomer =()=>{
    return (
<>
<Container fluid>
<Navbar className="justify-content-between" style={{backgroundColor: "#FEFFFF"}}>
<Row >
  <col-12>
  <Navbar expand="lg" sticky="top" style={{backgroundColor: "#FEFFFF"}}>
    <Navbar.Brand href="#home" > <img className="d-inline-block align-top ml-5" width="220"
        height="50" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">  
    </Navbar.Toggle>
    </Navbar>
  </col-12>
</Row>
  <Button variant="outline-primary" type="submit" className="mr-5" onClick={() => history.push('/Home')}>Home</Button>
</Navbar>
</Container>
<Jumbotron fluid className="pattern">
  <Container>

<Modal.Dialog>
  <Modal.Header >
    <Modal.Title>Data Profile</Modal.Title>
  </Modal.Header>
  <Modal.Body>
   
  <Container>
  <Row>

{/* Left */}
    <Col xs={6} md={6}>
    <img src={Profile} thumbnail/>
    <Container>
  <Row className="mt-2">
    <Form.File id="formcheck-api-regular">
      <Form.File.Input />
    </Form.File> 
  </Row>
 
</Container>
    </Col>

    {/* Right */}
    <Col>
    <Form.Group controlId="formBasicUsername">
    <Form.Control type="text" placeholder="Full Name" />
  </Form.Group> 
  <Form.Group controlId="formBasicUsername">
    <Form.Control type="text" placeholder="ID KTP" />
  </Form.Group>
  <Form.Group controlId="formBasicUsername">
    <Form.Control type="text" placeholder="No. HP" />
  </Form.Group> 

  <Form.Group controlId="formBasicUsername">
    <Form.Control type="text" placeholder="No Rekening" />
  </Form.Group>
  <Form.Group>
    <Button  variant="dark">Save</Button>
  </Form.Group>
    </Col>
  </Row>
</Container>
  </Modal.Body>
</Modal.Dialog>
</Container>
</Jumbotron>

<footer className="page-footer font-small">
  <div className="footer-copyright text-center py-3">© 2020 Copyright by UGM FE BE 05
  </div>
</footer>
</>
    )
}

export default DataCustomer