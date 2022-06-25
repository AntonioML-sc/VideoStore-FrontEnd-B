import React from "react"
import {useState, useEffect} from 'react'
import "./Films.css"
import axios from 'axios'

const Films = props => {
    let [data, setData] = useState({
        films: [],
        search: ""
    })

    useEffect(() => {
        axios.get('http://localhost:5000/films')
        .then(resp => {
            console.log(resp.data);
            setData({
                ...data,
                films: resp.data
            });
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