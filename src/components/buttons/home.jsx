import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'

const HomeButton = () => {
    // We get a state of addItems
    // Write the name of the file not the function
 
    return (
        <>
            <NavLink to="/" className="b  mx-2" >
               <FaHome className=''/> 
            
            </NavLink>
        </>
    )
}

export default HomeButton