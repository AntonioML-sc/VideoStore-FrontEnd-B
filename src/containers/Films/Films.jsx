import React from "react"
import { useState, useEffect } from 'react'
import "./Films.css"
import axios from 'axios'
import FilmCard from '../../components/FilmCard/FilmCard'

const Films = props => {
    let [data, setData] = useState({
        films: [],
        search: "",
        searchType: ""
    })

    useEffect(() => {
        if (data.search == "") {
            axios.get('http://localhost:5000/films')
                .then(resp => {
                    // console.log(resp.data);
                    setData({
                        ...data,
                        films: resp.data
                    });
                })
        } else if (data.searchType == "title") {
            axios.get(`http://localhost:5000/films/getByTitle/${data.search}`)
                .then(resp => {
                    // console.log(resp.data);
                    setData({
                        ...data,
                        films: resp.data
                    });
                })
        } else if (data.searchType == "genre") {
            axios.get(`http://localhost:5000/films/getByGenre/${data.search}`)
                .then(resp => {
                    // console.log(resp.data);
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
            [event.target.name]: event.target.value,
            searchType: "title"
        })
    }

    const hideSearchScreen = () => {
        document.getElementsByClassName("searchByGenreScreen")[0].style.display = "none";
    }

    const showSearchScreen = () => {
        document.getElementsByClassName("searchByGenreScreen")[0].style.display = "flex";
    }

    const setGenre = (event) => {
        setData({
            ...data,
            search: event.target.value,
            searchType: "genre"
        })
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
            <div className="searchByGenreScreen" onClick={hideSearchScreen}>
                <div className="searchByGenreMenu">
                    <p className="genres">Genres:</p>
                    <form className="sideBarSearch">
                        <input className="genreButton" type="button" value="action" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="adventure" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="animation" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="biopic" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="comedy" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="crime" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="drama" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="fantasy" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="horror" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="romance" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="sci-fi" onClick={setGenre} name="search" />
                        <input className="genreButton" type="button" value="thriller" onClick={setGenre} name="search" />
                    </form>
                </div>
                <div className="emptySpace"></div>
            </div>
            <div className="filmsList">
                {
                    data.films.map((film) => (
                        <FilmCard data={film} key={film.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Films