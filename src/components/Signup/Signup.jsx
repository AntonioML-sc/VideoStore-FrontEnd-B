import React from "react";
import "./Signup.css";

const Signup = (props) => {


    return (

        <div id="signupWall">


<div className="signupitem">
                <label className="labelitems">
                    Name: 
                </label>
                    <input className="inputitem" type="text" name="name" />
                
            </div>

            <div className="signupitem">
                <label className="labelitems">
                    Surname:
                </label>
                    <input className="inputitem" type="text" name="name" />
                
            </div>

            <div className="signupitem">
                <label className="labelitems">
                    Email:
                </label>
                    <input className="inputitem" type="text" name="name" />
                
            </div>

            <div className="signupitem">
                <label className="labelitems">
                    Password
                </label>
                    <input className="inputitem" type="text" name="name" />
                
            </div>

            <div className="signupitem">
                <label className="labelitems">
                    Repeat Password:
                </label>
                    <input className="inputitem" type="text" name="name" />
                
            </div>
            
            <div className="signupitem">
                <label className="labelitems">
                    Repeat Password:
                </label>
                    <input className="inputitem" type="text" name="name" />
                
            </div>


            <div className="signupitem submitSignupItem">
                <input type="submit" value="Accept" />
            </div>



        </div>

    )
}

export default Signup