import React from "react";
import './Footer.scss'
import { ModalFooter } from "react-bootstrap";

const Footer = props => {


    return(
        <ModalFooter className="footer">
            <div className="footLeft">
                 <a href="">Film News</a><br />
                 <a href="">Careers</a><br />
                 <a href="">Press Lounge</a><br />
             </div>
             <div>
                 <div className="logoContainer">
                     <img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" />
                     <img className="logo" src="https://avatars.githubusercontent.com/u/36510045?s=280&v=4" alt="" />
                     <img className="logo" src="https://cdn.icon-icons.com/icons2/2037/PNG/512/facebook_fb_media_social_icon_124262.png" alt="" />
                 </div>
                 <div className="credit">Created by: Antonio Morales, Jackson Almeida and Jose Carlos</div>
             </div>
             <div className="footRight">
                 <a href="">Privacy Notice</a><br />
                 <a href="">Cookies Notice</a><br />
                 <a href="">Conditions of Use</a><br />
             </div>
        </ModalFooter>
        // <div className="modal-footer footer">
        //     <div className="footLeft">
        //         <a href="">Film News</a><br />
        //         <a href="">Careers</a><br />
        //         <a href="">Press Lounge</a><br />
        //     </div>
        //     <div>
        //         <div className="logoContainer">
        //             <img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" />
        //             <img className="logo" src="https://avatars.githubusercontent.com/u/36510045?s=280&v=4" alt="" />
        //             <img className="logo" src="https://cdn.icon-icons.com/icons2/2037/PNG/512/facebook_fb_media_social_icon_124262.png" alt="" />
        //         </div>
        //         <div className="credit">Created by: Antonio Morales, Jackson Almeida and Jose Carlos</div>
        //     </div>
        //     <div className="footRight">
        //         <a href="">Privacy Notice</a><br />
        //         <a href="">Cookies Notice</a><br />
        //         <a href="">Conditions of Use</a><br />
        //     </div>
        // </div>
    )
}

export default Footer