import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const ForgetPassword = () => {

    return (
        <div className="Forget">
            <div className="f-i">
                <img className="img" src="/assets/images/home/img2.jpeg" ></img>
            </div>
            <div className="f-t">
                <h2 className="my-3">Forget Password</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, adipisci?</p>


                <div>

                    <MdOutlineEmail className="Password" />
                    <input type="email" className=" my-4 search" name="email" placeholder="Email" id="exampleInputEmail" />
                </div>
                <NavLink to="/otp">
                    <button className="Shop">Send Email</button></NavLink>


            </div>
        </div>
    )
}

export default ForgetPassword