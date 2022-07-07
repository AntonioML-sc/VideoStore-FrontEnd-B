import React from "react"
import { useState, useEffect } from 'react'
import "./Films.scss"
import axios from 'axios'
import FilmCard from '../../components/FilmCard/FilmCard'
import FilmDetailedCard from "../../components/FilmDetailedCard/FilmDetailedCard"

const Films = () => {
    let [data, setData] = useState({
        films: [],
        search: "",
        searchType: "",
        searching: false,
        myInterval: 0,
        showDetails: false,
        filmDetails: "",
        showGenres: false,
        genres: ["action", "adventure", "animation", "biopic", "comedy", "crime", "drama", "fantasy", "horror", "romance", "sci-fi", "thriller"]
    })

    // updates data.films to show when user changes search word in form or uses search menu
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

    // manages changes in menu's form. Wait 0.4s until user stops writing to update data.search (and then data.films, rendering again)
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

    // shows search by genre menu
    const showSearchScreen = () => {
        // document.getElementsByClassName("searchByGenreScreen")[0].style.display = "flex";
        setData({
            ...data,
            showGenres: true
        })
    }

    const hideSearchScreen = () => {
        // document.getElementsByClassName("searchByGenreScreen")[0].style.display = "flex";
        setData({
            ...data,
            showGenres: false
        })
    }

    // sets data.searchType and search so as to make useEffect hook search by genre. Hide search by genre menu.
    const setGenre = (event) => {
        setData({
            ...data,
            search: event.target.value,
            searchType: "genre",
            showGenres: false
        })
    }

    // sets the hook to its initial state
    const clear = () => {
        setData({
            ...data,
            search: "",
            searchType: "",
            searching: false,
            myInterval: 0,
            showDetails: false,
            filmDetails: "",
            showGenres: false
        });
    }

    // renders the search by genre menu
    const GenresMenu = () => {

        if (data.showGenres) {
            return (
                <div className="searchByGenreScreen">
                    <div className="searchByGenreMenu">
                        <p className="genres">Genres:</p>
                        <form className="sideBarSearch">
                            <input className="genreButton" type="button" value="ALL" onClick={clear} name="search" />
                            {
                                data.genres.map((genre, index) => (
                                    <input key={index} className="genreButton" type="button" value={genre} onClick={setGenre} name="search" />
                                ))
                            }                        
                        </form>
                    </div>
                    <div className="emptySpace" onClick={hideSearchScreen}></div>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }

    // functions to set changes in hook to show / hide a detailed film card on click on the chosen film card
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

    // Renders film detailed card on demand
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

    // renders a film card per film stored in array data.films
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

    // renders the container
    return (
        <div className="filmsCont">
            <DetailedCard />
            <div className="searchBar">
                <button className="showSearchScreenButton" onClick={showSearchScreen}>Genres</button>
                <form className="searchBarForm">
                    <input className="inputBox" type="text" onChange={handleChange} name="search" placeholder=" Search" />
                </form>
            </div>
            <GenresMenu />
            <div className="filmsList">
                <FilmsList />
            </div>
        </div>
    )
}

export default Films