import React from "react";
import { logout } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./Profile.scss"
import UserCard from "../../../components/UserCard/UserCard";

const Profile = props => {
    let [data,setData] = useState({
        users: []
    });

    const dispatch = useDispatch();
    const datos = useSelector(userData);
    let navigate = useNavigate();

    const getout = () => {
        dispatch(logout());
        navigate("/")
    }

    useEffect(() => {
        async function fetchUsers(){
                const config = {
                    headers: { "Authorization": `Bearer ${datos.token}` }
                }
                await axios.get('https://aml-mysql-28-06-22-videostore.herokuapp.com/users/',config)
                .then(resp => {

                    setData({
                        ...data,
                        users: resp.data
                    })

                }).catch((error) =>{
                    console.log(error)
                })
        }
        fetchUsers()
    },[])
   
    const UserList = () => {
        if(data.users.length > 0) {
            return(
                data.users.map((users, index) => (
                    <div key={index}>
                        <UserCard data={users} />
                    </div>
                ))
            )
        }
    }
    if (datos.user.role == "admin") {
        return (
            <div className="profileWall">
                <div id="profileCard">
                    <div id="profilePhoto">
    
                    </div>
    
                    <div id="profileInfo">
                        <div className="profileItem">
                            <h3 id="profileItemName">{datos.user.name}</h3>
                        </div>
                        <div className="profileItem">
                            <h3>{datos.user.email}</h3>
                        </div>
                        <div className="profileItem">
                            <h3>{datos.user.address}</h3>
                        </div>
                        <div className="profileItem">
                            <h3>{datos.user.phone}</h3>
                        </div>
                        <br></br>
                        <div className="profileItem">
                            <h3>Date of creation: {datos.user.createdAt}</h3>
                        </div>
    
                        
                    </div>
                </div>
               
                <button id="logoutButton" onClick={getout}>
                    Log out
                </button>
                <div className="userList">
                    <UserList />
                </div>
    
            </div>
        )
    }else {
        return (
            <div className="profileWall">
    
                <div id="profileCard">
                    <div id="profilePhoto">
    
                    </div>
    
                    <div id="profileInfo">
                        <div className="profileItem">
                            <h3 id="profileItemName">{datos.user.name}</h3>
                        </div>
                        <div className="profileItem">
                            <h3>{datos.user.email}</h3>
                        </div>
                        <div className="profileItem">
                            <h3>{datos.user.address}</h3>
                        </div>
                        <div className="profileItem">
                            <h3>{datos.user.phone}</h3>
                        </div>
                        <br></br>
                        <div className="profileItem">
                            <h3>Date of creation: {datos.user.createdAt}</h3>
                        </div>
    
                        
                    </div>
                </div>
               
                <button id="logoutButton" onClick={getout}>
                    Log out
                </button>
    
            </div>
        )
    }

   

}

export default Profile