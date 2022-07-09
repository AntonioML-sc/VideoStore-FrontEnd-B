import React from "react";
import { logout } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "./Profile.scss"
import UserCard from "../../../components/UserCard/UserCard";
import OrderCard from "../../../components/OrderCard/OrderCard";

const Profile = () => {

    let [users, setUsers] = useState([]);
    let [orders, setOrders] = useState([]);

    const dispatch = useDispatch();

    // User's data
    const datos = useSelector(userData);
    const createdAt = new Date(datos?.user.createdAt).toLocaleDateString();

    let navigate = useNavigate();

    // Log out and go to home page
    const getout = () => {
        dispatch(logout());
        navigate("/")
    }

    useEffect(() => {

        // redirects to /login it there is not a logged user
        if (!datos?.user) {
            navigate("/login");

        } else {

            const config = {
                headers: { "Authorization": `Bearer ${datos.token}` }
            }

            // get a list of all users from db. Visible only if logged user is admin.
            async function fetchUsers() {
                await axios.get('https://aml-mysql-28-06-22-videostore.herokuapp.com/users/', config)
                    .then(resp => {
                        setUsers(resp.data);
                    }).catch(error => { });
            }

            // get a list of all of the logged user's orders registered in db.
            async function fetchOrders() {
                await axios.get('https://aml-mysql-28-06-22-videostore.herokuapp.com/orders/userOrders', config)
                    .then(resp => {
                        setOrders(resp.data)
                    }).catch(error => { });
            }

            fetchOrders();

            if (datos?.user.role == "admin") {
                fetchUsers();
            }
            
        }
    }, [])

    // renders the list of users if admin is logged
    const UserList = () => {
        if (datos?.user.role == "admin") {
            if (users.length > 0) {
                return (
                    <div className="ElemList">
                        <div className="elemTitle">
                            <br></br>
                            <h3>Users Registered</h3>
                            <br></br>
                        </div>
                        <div className="list">
                            {
                                users.map((user, index) => (
                                    <UserCard key={index} data={user} />
                                ))
                            }
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="elemTitle">
                        <br></br>
                        <h3>No Users Registered. We are broke!</h3>
                        <br></br>
                    </div>
                )
            }
        }
    }

    // renders the list of orders
    const OrderList = () => {
        if (orders.length > 0) {
            return (
                <div className="ElemList" >
                    <div className="elemTitle">
                        <h3>Your orders</h3>
                        <br></br>
                    </div>
                    <div className="list">
                        {
                            orders.map((order, index) => (
                                <OrderCard key={index} data={order} />
                            ))
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div className="elemTitle">
                    <h3>You do not have orders registered. Look at our catalog and enjoy! </h3>
                    <br></br>
                </div>
            )
        }
    }

    // renders the container
    if (datos?.user) {
        return (
            <div className="profileWall">
                <div id="profileCard">

                    <div id="profilePhoto"></div>

                    <div id="profileInfo">
                        <div className="profileItem">
                            <h3 id="profileItemName">{datos?.user.name}</h3>
                        </div>
                        <div className="profileItem">
                            <h3>{datos?.user.email}</h3>
                        </div>
                        <div className="profileItem">
                            <h3>{datos?.user.address}</h3>
                        </div>
                        <div className="profileItem">
                            <h3>{datos?.user.phone}</h3>
                        </div>
                        <br></br>
                        <div className="profileItem">
                            <h3>Date of creation: {createdAt}</h3>
                        </div>
                    </div>
                </div>

                <button id="logoutButton" onClick={getout}>
                    Log out
                </button>

                <OrderList />

                <UserList />
            </div>
        )
    }
}

export default Profile