import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {FaHeart} from 'react-icons/fa'

const Favorite = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/favorite" className="b mx-2" >
               <FaHeart/>
            </NavLink>
        </>
    )
}

export default Favorite