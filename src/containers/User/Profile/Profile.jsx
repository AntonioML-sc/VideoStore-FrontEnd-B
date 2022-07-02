import React from "react";
import { logout } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import "./Profile.css"

const Profile = props => {
    const dispatch = useDispatch();
    const datos = useSelector(userData);
    let navigate = useNavigate();

    const getout = () => {
        dispatch(logout(datos));
        navigate("/")
    }

    return (
        <div className="log">
            <div>
                Information: <br />
                Name: {datos.user.name},<br />
                E-mail: {datos.user.email},<br />
                Address: {datos.user.address}, <br />
                Phone: {datos.user.phone}, <br />
                Degister date: {datos.user.createdAt}
            </div>
            <button onClick={getout}>Log out</button>

        </div>
    )

}

export default Profile