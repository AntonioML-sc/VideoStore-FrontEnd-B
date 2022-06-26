import axios from "axios";
import React, { useState } from "react";
import "./Login.css"

const Login = props => {

    let [datos, setDatos] = useState({
        email : "",
        pass : ""
})

    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        axios.post('http://localhost:5000/users/login')
       
    }
    return (
        <div className="cont">
                <label className="tittle">Email:</label>
                <input type="text" value={datos.email} onChange={handleChange} name="email" />
                <label className="tittle">Password:</label>
                <input type="password" value={datos.pass}  onChange={handleChange} name="pass" />
                <input type="submit" value="Send"  onClick={handleSubmit}/>
        </div>
    )
}

export default Login