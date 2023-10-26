import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {FaCartPlus} from 'react-icons/fa'

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart" className="b mx-2" >
               <FaCartPlus></FaCartPlus> 
            </NavLink>
        </>
    )
}

export default CartBtn
