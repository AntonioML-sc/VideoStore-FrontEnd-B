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

const Profile = props => {
    let [data, setData] = useState({
        users: [],
        orders: []
    });

    const dispatch = useDispatch();
    const datos = useSelector(userData);
    let navigate = useNavigate();

    const getout = () => {
        dispatch(logout());
        navigate("/")
    }

    useEffect(() => {
        async function fetchUsers() {
            const config = {
                headers: { "Authorization": `Bearer ${datos.token}` }
            }
            await axios.get('https://aml-mysql-28-06-22-videostore.herokuapp.com/users/', config)
                .then(resp => {

                    setData({
                        ...data,
                        users: resp.data
                    })

                }).catch((error) => {
                    console.log(error)
                })
        }

        async function fetchOrders() {
            const config = {
                headers: { "Authorization": `Bearer ${datos.token}` }
            }
            await axios.get('https://aml-mysql-28-06-22-videostore.herokuapp.com/orders/userOrders', config)
                .then(resp => {

                    setData({
                        ...data,
                        orders: resp.data
                    })

                }).catch((error) => {
                    console.log(error)
                })
            console.log(data.orders)
        }

        fetchUsers()
        fetchOrders()
    }, [])

    const UserList = () => {
        if (data.users.length > 0) {
            return (
                data.users.map((users, index) => (
                    <div key={index}>
                        <UserCard data={users} />
                    </div>
                ))
            )
        }
    }

    const OrderList = () => {
        if (data.orders.length > 0) {
            return (
                data.orders.map((order, index) => (
                    <div key={index}>
                        <OrderCard data={order} />
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
                <div className="list">
                    <UserList />
                </div>

            </div>
        )
    } else {
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

                <div className="profileItem">
                    <h3>Orders Registered</h3>
                    <br></br>
                </div>
                <div className="list">
                    <OrderList />
                </div>

            </div>
        )
    }
}

export default Profile