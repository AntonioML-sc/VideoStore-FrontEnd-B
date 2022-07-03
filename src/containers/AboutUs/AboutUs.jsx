import React from "react";
import "./AboutUs.scss"
import Container from 'react-bootstrap/Container';

const AboutUs = props => {


    return (
        <Container className="AboutUsCont">
            <div className="tittleAbout">About Us</div>
            <div className="textAbout">
                We are students of the GeeksHubs Fullstack Developer bootcamp.
                This is our first project using React, Sass, and Redux.<br />
                You can visit our profile at:<br />
                 <a href="https://github.com/AntonioML-sc">Antonio's GitHub</a>  <br />
                 <a href="https://github.com/99jack99">Jackson's GitHub</a> <br />
                 <a href="https://github.com/jcarlos2n">José Carlos's GitHub</a>

            </div>
        </Container>
    )
}

export default AboutUs