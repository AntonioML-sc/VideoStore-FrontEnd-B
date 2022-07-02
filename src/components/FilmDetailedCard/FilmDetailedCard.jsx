
import React from "react";
import './FilmDetailedCard.css'

const FilmDetailedCard = props => {
    console.log("Props", props.data.title)
    return (
        <div className="FilmDetailedCard">
            <img className="cardImg" src={props.data.image} />
            <div className="cardParaph">
                <p className="cardText" >Title: {props.data.title}</p>
                <p className="cardText" >Director: {props.data.director}</p>
                <p className="cardText" >Release year: {props.data.year}</p>
                <p className="cardText" >Genres: {props.data.genre}</p>
                <p className="cardText" >Duration: {props.data.duration} min</p>
                <p className="cardText" >Recommended age: {props.data.minAge} years</p>
                <p className="cardText" >Synopsis: </p>
                <p className="cardText" >{props.data.synopsis}</p>
            </div>
        </div>
    )
}

export default FilmDetailedCard