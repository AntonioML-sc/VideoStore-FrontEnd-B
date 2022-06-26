import React from 'react'
import './FilmCard.css'

const FilmCard = props => {
    console.log(props)
    return (
        <div className="FilmCard">
            <h3>{props.data.title}</h3>

        </div>
    )
}

export default FilmCard