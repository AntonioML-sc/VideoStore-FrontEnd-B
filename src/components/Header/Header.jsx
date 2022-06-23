import React from "react";
import "./Header.css"


const Header = () => {
    return (
        <div id="Headerwall">

            <div className="headeritems">
            <a className="headerlinks" href="http://"><img src="" alt="LOGO" /></a>
            </div>
            <div className="headeritems">
                <div className="item"><a className="headerlinks" href="http://">Home</a></div>
                <div className="item"><a className="headerlinks" href="http://">Films</a></div>
                <div className="item"><a className="headerlinks" href="http://">About us</a></div>
            </div>
            <div className="headeritems">
                <div className="item"><a className="headerlinks" href="http://">Sign up</a></div>
                <div className="item"><a className="headerlinks" href="http://">Log in</a></div>
            </div>

        </div>
    )
}

export default Header;