
/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Jumbotron, Container, Row, Button, Col, Modal, Form} from 'react-bootstrap';
import Signup2 from '../images/signup.svg';
import Logo from '../images/Logo-BRI.png';
import "../css/styles.css";
import history from './../../history';

const Registartion =()=>{
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
  <Button type="submit" className="mr-5">Sign In</Button>
</Navbar>
</Container>

<Jumbotron fluid className="pattern">
  <Container>
  <Row >
    <Col>
    <img className="Image-Signout" src={Signup2}/>
    </Col>
    <Col > 
      <Modal.Dialog className="ModalSignup shadow">
        <Modal.Header >
          <Modal.Title className="text-center">Form Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

        <Form.Group controlId="formBasicUsername">
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => history.push('/DataCustomer')}>
          Sign Up
        </Button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Col>
  </Row>
  </Container>
</Jumbotron>
<footer className="page-footer font-small">
  <div className="footer-copyright text-center py-3">© 2020 Copyright by UGM FE BE 05
  </div>
</footer>
</>
    )
}

export default Registartion