import React from "react"
import { useState, useEffect } from 'react'
import "./Films.scss"
import axios from 'axios'
import FilmCard from '../../components/FilmCard/FilmCard'
import FilmDetailedCard from "../../components/FilmDetailedCard/FilmDetailedCard"

const Films = props => {
    let [data, setData] = useState({
        films: [],
        search: "",
        searchType: "",
        showDetails: false,
        filmDetails: "",
        searching: false,
        myInterval: 0
    })

    useEffect(() => {
        async function fetchFilms() {
            try {
                if (data.search == "") {
                    await axios.get('https://aml-mysql-28-06-22-videostore.herokuapp.com/films')
                        .then(resp => {
                            setData({
                                ...data,
                                films: resp.data
                            });
                        }).catch((error) => {
                            setData({
                                ...data,
                                films: []
                            });
                        })
                } else if (data.searchType == "title") {
                    await axios.get(`https://aml-mysql-28-06-22-videostore.herokuapp.com/films/getByTitle/${data.search}`)
                        .then(resp => {
                            setData({
                                ...data,
                                films: resp.data
                            });
                        }).catch((error) => {
                            setData({
                                ...data,
                                films: []
                            });
                        })
                } else if (data.searchType == "genre") {
                    await axios.get(`https://aml-mysql-28-06-22-videostore.herokuapp.com/films/getByGenre/${data.search}`)
                        .then(resp => {
                            setData({
                                ...data,
                                films: resp.data
                            });
                        }).catch((error) => {
                            setData({
                                ...data,
                                films: []
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

        if (data.searching) {
            clearInterval(data.myInterval)
        }

        setData({
            ...data,
            searching: true,
            myInterval: setTimeout(() => {
                setData({
                    ...data,
                    [event.target.name]: event.target.value,
                    searchType: "title",
                    searching: false,
                    myInterval: 0
                })
            }, 400)
        })

        data.myInterval
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

    const showDetailedCard = (event, film) => {
        setData({
            ...data,
            showDetails: true,
            filmDetails: film
        })
    }

    const hideDetailedCard = (event) => {
        setData({
            ...data,
            showDetails: false,
            filmDetails: ""
        })
    }

    const DetailedCard = () => {
        if (data.showDetails) {
            return (
                <div className="DetailsScreen">
                    <div className="rowEmpty1" onClick={hideDetailedCard}></div>
                    <div className="rowCard">
                        <div className="colEmpty" onClick={hideDetailedCard}></div>
                        <div className="colCard">
                            <FilmDetailedCard data={data.filmDetails} />
                        </div>
                        <div className="colEmpty" onClick={hideDetailedCard}></div>
                    </div>
                    <div className="rowEmpty2" onClick={hideDetailedCard}></div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    const FilmsList = () => {
        if (data.films.length > 0) {
            return (
                data.films.map((film, index) => (
                    <div key={index} onClick={(event) => showDetailedCard(event, film)} >
                        <FilmCard data={film} />
                    </div>
                ))
            )
        } else {
            return (<div></div>)
        }
    }

    return (
        <div className="filmsCont">
            <DetailedCard />
            <div className="searchBar">
                <button className="showSearchScreenButton" onClick={showSearchScreen}>Genres</button>
                <form className="searchBarForm">
                    <input className="inputBox" type="text" onChange={handleChange} name="search" placeholder=" Search" />
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
                <FilmsList />
            </div>
        </div>
    )
}

export default Films