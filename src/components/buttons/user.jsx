import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaUser} from 'react-icons/fa'

const User = () => {
    // We get a state of addItems
    // Write the name of the file not the function
 
    return (
        <>
            <NavLink to="/user" className="b mx-2" >
               <FaUser/> 
            
            </NavLink>
        </>
    )
}

export default User