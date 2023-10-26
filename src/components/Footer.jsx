import React from 'react'
import { FaCartPlus, FaFacebook, FaFacebookMessenger, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
       <footer className='p-5'>
        <div className='text-footer'>
        <NavLink className="navbar-brand  fw-bold mx-5" to="/">Online Shop <FaCartPlus className='bu'></FaCartPlus> </NavLink>
        </div>
        <div className='icons'> 
        <div className='Follow'>
          <h2>Follow Us</h2>   
        </div>
       
            <div>
            <FaFacebook className='m-2'/>
<FaInstagram  className='m-2'/>
<FaYoutube className='m-2'/>
<FaFacebookMessenger className='m-2'/>
            </div>
           

        </div>

       </footer>
    )
}

export default Footer
