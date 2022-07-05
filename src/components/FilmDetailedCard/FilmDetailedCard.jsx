
import React from "react";
import './FilmDetailedCard.scss'
import axios from "axios";

import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import evalField from '../../utils'

const FilmDetailedCard = props => {

    let navigate = useNavigate()
    
    const goTo = (destination) => {
        navigate(destination)
    }

    const loggedUser = useSelector(userData);

    const [rent, setRent] = useState({
        filmId: props.data.id,
        returnDate: "",
        totalPrice: 4,
        isError: false,
        message: ""
    })

    const handleInput = (event) => {
        setRent({
            ...rent,
            [event.target.name]: event.target.value
        })
    }

    const rentFilm = (event) => {

        event.preventDefault()
        console.log("entro")

        if (!evalField('returnDate', rent.returnDate)) {
            setRent({
                ...rent,
                isError: true,
                message: 'Reenter a valid date'
            });
            console.log(rent.message)
            return;
        } else {
            setRent({
                ...rent,
                isError: false,
                message: ""
            });

            registerOrder()

            setTimeout(() => {
                navigate("/")
            }, 1500)
        }
    }

    const registerOrder = async () => {
        console.log("llego al registerOrder")
        console.log("token.id" + loggedUser.user.id)
        const config = {
            headers: { "Authorization": `Bearer ${loggedUser.token}` }
        }
        await axios.post('https://aml-mysql-28-06-22-videostore.herokuapp.com/orders/register',
            {
                filmId: rent.filmId,
                returnDate: rent.returnDate,
                totalPrice: rent.totalPrice
            },
            config)
    }

    const RentFilmForm = () => {

        if (!loggedUser?.user) {
            return (
                <div className="RentFilmForm" >
                    <button className="submitOrder" onClick={() => goTo("/login")} >Log In</button>
                    <button className="submitOrder" onClick={() => goTo("/signup")} >Sign Up</button>
                </div>
            )
        } else {
            return (
                <form className="RentFilmForm" onSubmit={rentFilm} >
                    <input className="dateInput" onChange={handleInput} type="text" name="returnDate" value={rent.returnDate} placeholder="2022-06-27" />
                    <button className="submitOrder" type="submit">Order</button>
                </form>
            )
        }
    }

    return (
        <div className="FilmDetailedCard">
            <div className="cardImgColumn" >
                <img className="cardImg" src={props.data.image} />
                <RentFilmForm />
            </div>
            <div className="cardParaph">
                <p className="cardText title" >Title: {props.data.title}</p>
                <p className="cardText" > <span className="fieldName" >Director: </span> {props.data.director}</p>
                <p className="cardText" > <span className="fieldName" >Release year: </span>{props.data.year}</p>
                <p className="cardText" > <span className="fieldName" >Genres: </span>{props.data.genre}</p>
                <p className="cardText" > <span className="fieldName" >Duration: </span>{props.data.duration} min</p>
                <p className="cardText" > <span className="fieldName" >Recommended age: </span>{props.data.minAge} years</p>
                <p className="cardText" > <span className="fieldName" >Synopsis: </span></p>
                <p className="cardText synopsis" >{props.data.synopsis}</p>
            </div>
        </div>
    )
}

export default FilmDetailedCard