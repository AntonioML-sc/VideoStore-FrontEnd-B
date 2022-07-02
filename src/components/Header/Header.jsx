import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../containers/User/userSlice";


const Header = () => {

    const datosUsuario = useSelector(userData);

    if (!datosUsuario?.user) {
        return (
            <div id="Headerwall">
    
                <div className="headeritems">
                    <a className="headerlinks" href="http://"><img src="" alt="LOGO" /></a>
                </div>
                <div className="headeritems">
                    <div className="item"><NavLink to="/">Home</NavLink></div>
                    <div className="item"><NavLink to="/films">Films</NavLink></div>
                    <div className="item"><NavLink to="/aboutus">About Us</NavLink></div>
                </div>
                <div className="headeritems">
                    <div className="item"><NavLink to="/signup">Sign up</NavLink></div>
                    <div className="item"><NavLink to="/login">Log in</NavLink></div>
                </div>
    
            </div>
        )
    }else {
        console.log(datosUsuario?.user.name)
        return (
            
            <div id="Headerwall">
    
                <div className="headeritems">
                    <a className="headerlinks" href="http://"><img src="" alt="LOGO" /></a>
                </div>
                <div className="headeritems">
                    <div className="item"><NavLink to="/">Home</NavLink></div>
                    <div className="item"><NavLink to="/films">Films</NavLink></div>
                    <div className="item"><NavLink to="/aboutus">About Us</NavLink></div>
                </div>
                <div className="headeritems">
                    <div className="item"><NavLink to="/profile">{datosUsuario?.user.name}</NavLink></div>
                </div>
    
            </div>
        )
    }
    
}

export default Header;