import React from 'react'
import './FilmCard.css'

const FilmCard = props => {
    return (
        <div className="FilmCard">
            <h3>Title: {props.data.title}</h3>

        </div>
    )
}