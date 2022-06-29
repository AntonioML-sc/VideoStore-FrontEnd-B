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
        async function fetchFilms() {
            try {
                if (data.search == "") {
                    await axios.get('https://aml-mysql-28-06-22-videostore.herokuapp.com/films')
                        .then(resp => {
                            // console.log(resp.data);
                            setData({
                                ...data,
                                films: resp.data
                            });
                        })
                } else if (data.searchType == "title") {
                    await axios.get(`https://aml-mysql-28-06-22-videostore.herokuapp.com/films/getByTitle/${data.search}`)
                        .then(resp => {
                            // console.log(resp.data);
                            setData({
                                ...data,
                                films: resp.data
                            });
                        })
                } else if (data.searchType == "genre") {
                    await axios.get(`https://aml-mysql-28-06-22-videostore.herokuapp.com/films/getByGenre/${data.search}`)
                        .then(resp => {
                            // console.log(resp.data);
                            setData({
                                ...data,
                                films: resp.data
                            });
                        })
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchFilms()
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
                        <input type="text" onChange={handleChange} name="search" />
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