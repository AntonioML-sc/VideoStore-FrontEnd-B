import React from "react"
import {useState, useEffect} from 'react'
import "./Films.css"
import axios from 'axios'

const Films = props => {
    let [films, setFilms] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/films')
        .then(resp => {
            console.log(resp.data);
            setFilms(resp.data);
        })
    }, [])

    return (
        <div className="cont">
            <div className="searchBar">SearchBar</div>
            <div className="filmsList">
                Container for film cards
            </div>
        </div>
    )
}

export default Films