import React from "react"
import { useState, useEffect } from 'react'
import "./Films.css"
import axios from 'axios'

const Films = props => {
    let [data, setData] = useState({
        films: [],
        search: ""
    })

    useEffect(() => {
        if (data.search == "") {
            axios.get('http://localhost:5000/films')
                .then(resp => {
                    console.log(resp.data);
                    setData({
                        ...data,
                        films: resp.data
                    });
                })
        } else {
            axios.get(`http://localhost:5000/films/getByTitle/${data.search}`)
                .then(resp => {
                    console.log(resp.data);
                    setData({
                        ...data,
                        films: resp.data
                    });
                })
        }
    }, [data.search])

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const hideSearchScreen = () => {
        document.getElementsByClassName("searchByGenreScreen")[0].style.display = "none";
    }

    const showSearchScreen = () => {
        document.getElementsByClassName("searchByGenreScreen")[0].style.display = "flex";
    }

    return (
        <div className="cont">
            <div className="searchBar">
                <button className="showSearchScreenButton" onClick={showSearchScreen}>Genres</button>
                <form className="searchBarForm">
                    <div>
                        <label>Search by title: </label>
                        <input type="text" value={data.search} onChange={handleChange} name="search" />
                    </div>
                </form>
            </div>
            <button className="searchByGenreScreen" onClick={hideSearchScreen}>
                <div className="searchByGenreMenu"></div>
                <div className="emptySpace"></div>
            </button>
            <div className="filmsList">
                Container for film cards
            </div>
        </div>
    )
}

export default Films