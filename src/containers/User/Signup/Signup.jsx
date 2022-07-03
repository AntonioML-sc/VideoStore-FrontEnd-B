import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { signupUser, userData } from '../userSlice'
import { useNavigate } from 'react-router-dom'
import "./Signup.css";

const Signup = props => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const userinfo = useSelector(userData)

    const [signup, setSignup] = useState({
        email: '',
        password: '',
        name: '',
        phone: '',
        address: '',
        isError: false,
        message: ''
    })

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/signup')
        }
    }, [])

    const handleInput = (event) => {
        setSignup({
            ...signup,
            [event.target.name]: event.target.value
        })
    }

    const userSignup = (event) => {
        event.preventDefault()

        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(signup.email)) {
            setSignup({
                ...signup,
                isError: true,
                message: 'Introduce un e-mail válido'
            });
            return;
        }

        if (signup.password.length > 4) {
            if (! /[\d()+-]/g.test(signup.password)) {
                setSignup({
                    ...signup,
                    isError: true,
                    message: 'Introduce un password válido'
                });
                return;
            };

        } else {
            setSignup({
                ...signup,
                isError: true,
                message: 'El password debe de tener como mínimo 4 caracteres'
            });
            return;
        }

        setSignup({
            ...signup,
            isError: false,
            errorMsg: ''
        });

        dispatch(signupUser(signup.email, signup.password, signup.name, signup.phone, signup.address))

    }

    return (

        <form id="signupWall"  >

            <div className="signupitem">
                <label className="labelitems">
                    Name:
                </label>
                <input onChange={handleInput} className="inputitem" type="text" name="name" />
            </div>

            <div className="signupitem">
                <label className="labelitems">
                    Email:
                </label>
                <input onChange={handleInput} className="inputitem" type="text" name="email" />
            </div>

            <div className="signupitem">
                <label className="labelitems">
                    Password:
                </label>
                <input onChange={handleInput} className="inputitem" type="password" name="password" />
            </div>

            <div className="signupitem">
                <label className="labelitems">
                    Phone:
                </label>
                <input onChange={handleInput} className="inputitem" type="text" name="phone" />
            </div>

            <div className="signupitem">
                <label className="labelitems">
                    Address:
                </label>
                <input onChange={handleInput} className="inputitem" type="text" name="address" />
            </div>

            <div className="signupitem submitSignupItem">
                <input onSubmit={userSignup} type="submit" value="Accept" />
            </div>

        </form>
    )
}

export default Signup