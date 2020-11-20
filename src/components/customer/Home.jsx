/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';
import { Navbar, Jumbotron, Container} from 'react-bootstrap';
import Logo from '../images/Logo-BRI.png';
import Signin from '../images/signin.svg';
import Signup from '../images/signup.svg';
import "../css/styles.css";
import history from './../../history';

const Home =()=>{  
    return (
 
<>
<Container fluid>
  <Navbar expand="lg" sticky="top" style={{backgroundColor: "#FEFFFF"}}>
    <Navbar.Brand href="#home" > <img className="d-inline-block align-top ml-5" width="220"
        height="50" src={Logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar> 
</Container>

<Jumbotron fluid className="Backgroundjumbo">
  <Container >
    <h1 className="text-center Home-h1 mb-3 ">Complain Handling</h1>
    <p className="text-center Paraf-p"> We love questions and feedback - and we're alwasys  <br></br>
 happy to help! Here are some ways to connect to us. </p>
  </Container>
</Jumbotron>

<div className="container">
  <div className="row TwoCardContainer ">
    <div className="col-lg-5">
    <div class="card shadow" >
    <img className="Card-Signin mt-4" src={Signin}/>
    <h2 class="text-center mt-4 text-card" onClick={() => history.push('/Login')}>Sign In</h2>
    </div>
    </div>
    <div className="col-lg-5">
    <div class="card shadow" >
    <img className="Card-Signout mt-4"src={Signup}/>
    <h2 class="text-center mt-4 text-card" onClick={() => history.push('/Registration')}>Sign Up</h2>
    </div>
    </div>
  </div>
</div>
<footer className="page-footer font-small pt-4">
  <div className="footer-copyright text-center py-3">© 2020 Copyright by UGM FE BE 05
  </div>
</footer>

</>

    )
}

export default Home