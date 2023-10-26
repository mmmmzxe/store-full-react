import React from 'react'
import { FaCartPlus, } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { CiLock } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
const Signup = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="bt mx-4 my-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                SignUp
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="">
                            <button type="button" className="btn-close   " data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className='login'>
                                <div className='cart-pl'>   <FaCartPlus className='cartp' /></div>

                                <h5 className="text-center flex justify-center m-2 text-lo" id="exampleModalLabel">Login</h5>
                            </div>

                        </div>

                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <AiOutlineUser className="Password" />
                                    <input type="user" className=" my-2 search-l" placeholder="User Name" id="exampleInputUser" />

                                </div>
                                <div className="mb-3">
                                    <MdOutlineEmail className="Password" />
                                    <input type="email" className=" my-2 search-l" placeholder="Email" id="exampleInputEmail" />

                                </div>
                                <div className="mb-3">
                                    <CiLock className="Password" />
                                    <input type='password' className=" my-2 search-l" placeholder="Password" id="exampleInputPassword" />
                                </div>
                                <div className="mb-3">
                                    <CiLock className="Password" />
                                    <input type='password' className=" my-2 search-l" placeholder="Check Password" id="exampleInputPassword" />


                                </div>

                                <div className='bt-login'>
                                    <button type="submit" className="Shop">Login</button>
                                </div>

                                <div className='Do-account'>
                                    <h6>Do You Have any Account?    <button type="button" className=" mx-4 my-2 button-s" data-bs-toggle="modal" data-bs-target="#loginModal">
                                        Login
                                    </button>

                                    </h6>
                                </div>
                                <div className='or'>
                                    <div className='or-text'>
                                        or</div>
                                </div>
                                <div className='g-f'>
                                    <button className="bt m-3">
                                        <span className="fa fa-google"></span> Google
                                    </button>
                                    <button className="bt m-3">
                                        <span className="fa fa-facebook "></span> Facebook
                                    </button></div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
