import React from 'react'
import './FilmCard.css'

const FilmCard = props => {
    console.log(props)
    return (
        <div className="FilmCard">
            <img className='FilmCardImg' src={props.data.image} alt={props.data.title} />
        </div>
    )
}

export default FilmCard