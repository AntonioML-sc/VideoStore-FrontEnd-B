
import React from "react";
import './FilmDetailedCard.scss'

const FilmDetailedCard = props => {
    return (
        <div className="FilmDetailedCard">
            <img className="cardImg" src={props.data.image} />
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