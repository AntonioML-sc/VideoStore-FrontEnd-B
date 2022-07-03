
import React, { useState, useEffect } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {loginUser, userData} from "../userSlice"

const Login = props => {

   const [credentials, setCrendentials] = useState({email:'',password:''});
   const [msgError, setMsgError] = useState("");

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const credenciales = useSelector(userData);

    const updateCredentials = (event) => {
        setCrendentials({...credentials, [event.target.name]: event.target.value})
    }


    useEffect(() => {
        if (credenciales?.token !== '') {
            navigate('/login');
        };
    },[]);

    const nosLogea = () => {
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email) ) {
            setMsgError('Introduce un e-mail válido');
            return;
        }

        if (credentials.password.length > 4) {
            if ( /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*+-_=?/])(?=.{8,})/.test(credentials.password)) {
                setMsgError('Password incorrecto');
                return;
            }
        }else{
            setMsgError('El password debe tener mas de 4 caracteres');
            return;
        }

        setMsgError('');
        dispatch(loginUser({
            email: credentials.email,
            password: credentials.password
        }));

        setTimeout(() => {
            navigate("/")
        },1000)

    };
 

        return (
            <div className="cont">
                    <label className="tittle">Email:</label>
                    <input  className="boxItem" type="email" name="email" onChange={updateCredentials}  />
                    <label className="tittle">Password:</label>
                    <input  className="boxItem" type="password"   name="password" onChange={updateCredentials} />
                    <input className="boton" type="submit" value="Login" onClick={() => nosLogea()}  />
                    <div className="error">{msgError}</div>
            </div>
        )
    
}

export default Login