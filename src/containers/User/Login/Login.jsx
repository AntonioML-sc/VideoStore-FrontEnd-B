
import React, { useState, useEffect } from "react";
import "./Login.scss"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userData } from "../userSlice"

import evalField from '../../../utils'

const Login = props => {

    const [credentials, setCrendentials] = useState({ email: '', password: '' });
    const [msgError, setMsgError] = useState("");

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const credenciales = useSelector(userData);

    const updateCredentials = (event) => {
        setCrendentials({ ...credentials, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if (credenciales?.token !== '') {
            navigate('/login');
        };
    }, []);

    const nosLogea = () => {

        if (! evalField('email', credentials.email) ) {
            setMsgError('Reenter a valid email');
            return;
        }

        if (credentials.password.length > 7) {            
            if (! evalField('password', credentials.password) ) {
                setMsgError('Password must contain a letter, a capital letter, a number and a special character');
                return;
            }
        } else {
            setMsgError('Password must have more than 8 characters');
            return;
        }

        setMsgError('');
        dispatch(loginUser({
            email: credentials.email,
            password: credentials.password
        }));

        setTimeout(() => {
            navigate("/")
        }, 1000)
    };

    return (
        <div className="loginWall">

            <label className="labelItemLogin">
                Email
            </label>
            <input className="inputItemLogin" type="email" name="email" onChange={updateCredentials} />

            <label className="labelItemLogin">
                Password
            </label>
            <input className="inputItemLogin" type="password" name="password" onChange={updateCredentials} />

            <input className="submitLoginItem" type="submit" value="LOG IN" onClick={() => nosLogea()} />

            <div className="errorMessage">
                {msgError}
            </div>

            <div className="addsign" onClick={() =>navigate("/signup")}>
                Still without DreamFilm? <br /> Register now and get 100 hours free!
            </div>
        </div>
    )
}

export default Login