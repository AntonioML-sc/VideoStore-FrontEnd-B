import React from "react";
import { logout } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import "./Profile.scss"

const Profile = props => {
 
    const dispatch = useDispatch();
    const datos = useSelector(userData);
    let navigate = useNavigate();
    const getout = () => {
        dispatch(logout());
        navigate("/")
    }

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

export default Profile