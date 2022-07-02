import React from "react";
import { logout } from "../userSlice";
import { useDispatch } from "react-redux";

const Profile = props => {
    const dispatch = useDispatch();

    return (
        <div className="log">

            <button onClick={()=>dispatch(logout())}>Log out</button>

        </div>
    )


}

export default Profile