import React from "react";
import "./Header.scss"
import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import logo from "../../assets/Logo/logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";



const Header = () => {

    const datosUsuario = useSelector(userData);

    if (!datosUsuario?.user) {
        return (
            <Navbar collapseOnSelect expand="lg">
                <Container className="Headerwall">
                    <Navbar.Brand as={Link} to="/"><img className="logo1 img" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav" className="Headerwall">
                        <Nav className="me-auto headeritems">
                            <Nav.Link as={Link} to="/" className="item">Home</Nav.Link>
                            <Nav.Link as={Link} to="films" className="item">Films</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" className="item">About Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/signup" className="item" >Sign Up</Nav.Link>
                            <Nav.Link as={Link} to="/login" className="item" >Log In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    } else {
        return (
            <Navbar collapseOnSelect expand="lg">
                <Container className="Headerwall">
                    <Navbar.Brand as={Link} to="/"><img className="logo1 img" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav" className="Headerwall">
                        <Nav className="me-auto headeritems">
                            <Nav.Link as={Link} to="/" className="item">Home</Nav.Link>
                            <Nav.Link as={Link} to="films" className="item">Films</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" className="item">About Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/profile" className="item" >{datosUsuario?.user.name}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

}

export default Header;