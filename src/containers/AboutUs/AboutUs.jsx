import React from "react";
import "./AboutUs.scss"
import Container from 'react-bootstrap/Container';

const AboutUs = props => {


    return (
        <div className="AboutUsWall">

            <div id="aboutText">
                <h4>We apreciate you came here!</h4> 
                <p>This proyect from Geekshubs was done with React.JS, and Redux. We have joined
                    our back-end previously done, with what you can see now, our front-end.
                </p>
            </div>

            <h4 id="githubsProfiles">Check out our Githubs!</h4>
            
            <div id="aboutProfiles">
                
                <div className="aboutProfilesItem">
                <a className="aboutProfilesItemLinks" href="https://github.com/AntonioML-sc">Antonio</a>
                </div>

                <div className="aboutProfilesItem">
                <a className="aboutProfilesItemLinks" href="https://github.com/99jack99">Jackson</a>
                </div>

                <div className="aboutProfilesItem">
                <a className="aboutProfilesItemLinks" href="https://github.com/jcarlos2n">José Carlos</a>
                </div>
            </div>
        </div>
    )
}

export default AboutUs