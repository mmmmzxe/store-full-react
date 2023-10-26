import React from 'react'
import {FiList  , FiHeart , FiLogOut, FiUser  } from 'react-icons/fi'
import {MdOutlineModeEditOutline } from 'react-icons/md'


const UserPage = () => {
    return (
       <div className='Usres'>
        <div>
            <div className='chenge-User'>
                <div className='user-Border'>
                    <FiUser className='i-u'/>
                    
                    </div>
                    <button className='edit'>
                        <MdOutlineModeEditOutline className='i-e'></MdOutlineModeEditOutline >
                    </button>

                
                       
                    
            </div>
            <h5>User Name</h5>
            <div className='user-icons'>
                <button className='icons-u'>
                    <FiHeart className='FI'/>
                    <p >Favorite</p>
                </button>
                <button className='icons-u'>
                    <FiList className='FI'/>
                    <p>My Order</p>
                </button>
                <button className='icons-u'>
                    <FiLogOut className='FI'/>
                    <p>Log Out</p>
                </button>
            </div>
        </div>
       </div>
    )
}

export default UserPage