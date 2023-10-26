import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {CiLock} from 'react-icons/ci'
const NewPass = () => {



    return (
        <div className="Forget">
            <div className="f-i">
                <img className="img" src="/assets/images/home/img5.jpeg" ></img>
            </div>
            <div className="f-t">
                <h2 className="my-3">Create New Password</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, adipisci?</p>

                <div>

                    <CiLock className="Password" />
                    <input type='password' className=" my-4 search" placeholder="New Password" id="exampleInputPassword" />
                </div>
                <div>
                    <CiLock  className="Password" />
                    <input type="password" className=" my-4 search" placeholder="Confirm New Password" id="exampleInputPassword"  />
              
                </div>



                <NavLink to="/done">
                <button className="Shop">Reset Passwoed</button></NavLink>  
                
                  

            </div>
        </div>
    )
}

export default NewPass