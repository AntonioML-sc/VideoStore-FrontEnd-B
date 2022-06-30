import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {loginUser, userData} from "../userSlice"

const Login = props => {

   const [credentials, setCrendentials] = useState({email:'',password:''});
   const [msgError, setMsgError] = useState("");


    // const handleChange = (event) => {
    //     setDatos({
    //         ...datos,
    //         [event.target.name]: event.target.value
    //     })
    // }
    return (
        <div className="cont">
                <label className="tittle">Email:</label>
                <input type="text"  name="email" />
                <label className="tittle">Password:</label>
                <input type="password"   name="pass" />
                <input type="submit" value="Send" />
        </div>
    )
}

export default Login