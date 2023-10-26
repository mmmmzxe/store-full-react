import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import Favorite from './buttons/favoritebtn'
import HomeButton from './buttons/home'
import User from './buttons/user'
import { FaCartPlus } from 'react-icons/fa'
import Home from './Home'


export const Header = () => {
    return (
        <>
       <div className='bg'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid ">
              <NavLink className="navbar-brand  fw-bold mx-5" to="/">Online Shop <FaCartPlus className='bu'></FaCartPlus> </NavLink>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>  
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                  
                    <form className='form'>
                           
                            <input type='text' placeholder='search' className='form-control '></input>
                           
                        </form>
                    <div className='mx-5 px-5 '>
                        <HomeButton/>
                    <User/>
                     <CartBtn/>
                    <Favorite/>
                    </div>
                    
                    
<div className='color-back'>
   <Login/>
                    <Signup/> 
</div>



                   
                   
                    </div>
                </div>
            </nav>

            </div>
        </>
    )
}

export default Header

