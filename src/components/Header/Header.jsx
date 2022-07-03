import React from "react";
import "./Header.scss"
import { NavLink } from "react-router-dom";
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
            // <div id="Headerwall">

            //     <div>
            //         <img className="logo1" src={logo} alt="" />
            //     </div>
            //     <div className="headeritems">
            //         <div className="item"><NavLink to="/">Home</NavLink></div>
            //         <div className="item"><NavLink to="/films">Films</NavLink></div>
            //         <div className="item"><NavLink to="/aboutus">About Us</NavLink></div>
            //     </div>
            //     <div className="headeritems">
            //         <div className="item"><NavLink to="/signup">Sign up</NavLink></div>
            //         <div className="item"><NavLink to="/login">Log in</NavLink></div>
            //     </div>

            // </div>
            // <Navbar  collapseOnSelect expand="lg">
            //     <Container className="Headerwall">
            //         <Navbar.Brand href="/"><img className="logo1 img" src={logo} alt="" /></Navbar.Brand>
            //         <Navbar.Collapse id="responsive-navbar-nav" className="Headerwall">
            //             <Nav className="me-auto headeritems">
            //                 <Nav.Link href="/" className="item">Home</Nav.Link>
            //                 <Nav.Link href="/films" className="item">Films</Nav.Link>
            //                 <Nav.Link href="/aboutus" className="item">About Us</Nav.Link>

            //             </Nav>
            //             <Nav>
            //                 <Nav.Link className="item" href="/signup">Sign Up</Nav.Link>
            //                 <Nav.Link className="item" href="/login">Log In</Nav.Link>

            //             </Nav>
            //         </Navbar.Collapse>
            //     </Container>
            // </Navbar>
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

            // <div className="Headerwall">

            //     <div className="headeritems">
            //         <img src={logo} alt="LOGO" />
            //     </div>
            //     <div className="headeritems">
            //         <div className="item"><NavLink to="/">Home</NavLink></div>
            //         <div className="item"><NavLink to="/films">Films</NavLink></div>
            //         <div className="item"><NavLink to="/aboutus">About Us</NavLink></div>
            //     </div>
            //     <div className="headeritems">
            //         <div className="item"><NavLink to="/profile">{datosUsuario?.user.name}</NavLink></div>
            //     </div>

            // </div>
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