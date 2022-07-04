import React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { signupUser, userData } from '../userSlice'
import { useNavigate } from 'react-router-dom'
import "./Signup.scss";

import evalField from '../../../utils'

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
        console.log("entro")

        if (!evalField('email', signup.email)) {
            setSignup({
                ...signup,
                isError: true,
                message: 'Reenter a valid email'
            });
            return;
        }

        if (signup.password.length > 7) {
            if (!evalField('password', signup.password)) {
                setSignup({
                    ...signup,
                    isError: true,
                    message: 'Password must include a letter, a capital letter, a number and a special character'
                });
                return;
            };

        } else {
            setSignup({
                ...signup,
                isError: true,
                message: 'Password must be at least 8 characters long'
            });
            return;
        }

        if (!evalField('name', signup.name)) {
            setSignup({
                ...signup,
                isError: true,
                message: 'Introduce a valid name'
            });
            return;
        }

        if (!evalField('phone', signup.phone)) {
            setSignup({
                ...signup,
                isError: true,
                message: 'Introduce a phone number with a valid format'
            });
            return;
        }

        if (!evalField('address', signup.address)) {
            setSignup({
                ...signup,
                isError: true,
                message: 'Introduce a valid address'
            });
            return;
        }

        setSignup({
            ...signup,
            isError: false,
            errorMsg: ''
        });

        dispatch(signupUser(signup.email, signup.password, signup.name, signup.phone, signup.address))
        
        setTimeout(() => {
            navigate("/")
        }, 1500)
    }

    return (

        <div id="signupWall">

            <form onSubmit={userSignup} >

                <div className="signupitem">
                    <label className="labelitems">
                        Name
                    </label>
                    <input onChange={handleInput} className="inputitem" type="text" name="name" />
                </div>

                <div className="signupitem">
                    <label className="labelitems">
                        Email
                    </label>
                    <input onChange={handleInput} className="inputitem" type="text" name="email" />
                </div>

                <div className="signupitem">
                    <label className="labelitems">
                        Password
                    </label>
                    <input onChange={handleInput} className="inputitem" type="password" name="password" />
                </div>

                <div className="signupitem">
                    <label className="labelitems">
                        Phone
                    </label>
                    <input onChange={handleInput} className="inputitem" type="text" name="phone" />
                </div>

                <div className="signupitem">
                    <label className="labelitems">
                        Address
                    </label>
                    <input onChange={handleInput} className="inputitem" type="text" name="address" />
                </div>

                <div className="signupitem">
                    <button className=" submitSignupItem" type="submit">Sign Up</button>
                </div>

            </form>

            <p className="errorMessage" >{signup.isError ? signup.message : ''}</p>
            <p className="errorMessage" >{userinfo.isError ? userinfo.errorMessage : userinfo.successMessage}</p>

            <div className="offerCard">
                <h1>Recently Added!</h1>
                <p>You can watch 100 h for free by just Signing up!</p>
            </div>

        </div>
    )
}

export default Signup