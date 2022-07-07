
import React from "react";
import './FilmDetailedCard.scss'
import axios from "axios";

import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import evalField from '../../utils'

const FilmDetailedCard = props => {

    // nav tools
    let navigate = useNavigate()

    const goTo = (destination) => {
        navigate(destination)
    }

    // data of logged user
    const loggedUser = useSelector(userData);

    // hook
    const [rent, setRent] = useState({
        filmId: props.data.id,
        pricePerDay: props.data.price,
        days: 0,
        returnDate: "",
        totalPrice: 0,
        isError: false,
        message: ""
    })

    // handles the release date input
    const handleInput = (event) => {
        const numDays = event.target.value;
        const date = new Date(); // current date
        const releaseDate = new Date((date.getTime() * 1) + rent.days * 24 * 60 * 60 * 1000); // add rent.days in miliseconds 
        if (evalField('days', numDays)) {
            setRent({
                ...rent,
                days: numDays,
                totalPrice: numDays * rent.pricePerDay,
                returnDate: releaseDate
            })
        } else {
            setRent({
                ...rent,
                days: numDays,
                totalPrice: 0,
                returnDate: ""
            })
        }
    }

    // eval the release date provided and register the order if the date is valid
    const rentFilm = (event) => {
        event.preventDefault()
        if (!evalField('days', rent.days) || (rent.days == 0)) {
            setRent({
                ...rent,
                isError: true,
                message: 'Enter a valid number of days'
            })
            return;
        } else {
            setRent({
                ...rent,
                isError: false,
                message: "Order registered"
            });

            registerOrder()

            setTimeout(() => {
                navigate("/")
            }, 1500)
        }
    }

    // register an order in data base
    const registerOrder = async () => {
        const config = {
            headers: { "Authorization": `Bearer ${loggedUser.token}` }
        }
        await axios.post('https://aml-mysql-28-06-22-videostore.herokuapp.com/orders/register',
            {
                filmId: rent.filmId,
                returnDate: rent.returnDate,
                totalPrice: rent.totalPrice
            },
            config).then((resp) => {
                console.log(resp)
            }).catch(error => {
                console.log(error)
            })
    }

    // renders buttons depending on whether there is a logged user
    const RentFilmButtons = () => {
        if (!loggedUser?.user) {
            return (
                <div>
                    <button className="submitOrder" onClick={() => goTo("/login")} >Log In</button>
                    <button className="submitOrder" onClick={() => goTo("/signup")} >Sign Up</button>
                </div>
            )
        } else {
            return (
                <button className="submitOrder" type="submit">Order</button>
            )
        }
    }

    // renders the detailed card of the film provided in props
    return (
        <div className="FilmDetailedCard">
            <div className="cardImgColumn" >
                <img className="cardImg" src={props.data.image} />
                <form className="RentFilmForm" onSubmit={rentFilm} >
                    <div>
                        <label className="dateLabel">Days: </label>
                        <input className="dateInput" onChange={handleInput} type="text" name="returnDate" value={rent.days} placeholder="days" />
                    </div>
                    <div>
                        <label className="dateLabel">Price: </label>
                        <input className="dateInput" type="text" disabled="true" name="returnDate" value={rent.totalPrice} />
                    </div>

                    <RentFilmButtons />
                </form>
                <div className="errorMessage">
                    {rent.message}
                </div>
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