import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const OtpPassword = () => {
    return(
        <div className="Forget">
        <div className="f-i">
            <img className="img" src="/assets/images/home/img3.jpeg" ></img>
        </div>
        <div className="f-t">
            <h2 className="my-3">Verification Code</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, adipisci?</p>
            
                  <div className="otp-namber my-4">
                    <input type="otp" className="otp" id="exampleInputEmail1"  />
            <input type="otp" className="otp" id="exampleInputEmail1" />
            <input type="otp" className="otp" id="exampleInputEmail1" />
            <input type="otp" className="otp" id="exampleInputEmail1" />
            </div>           
            
                              <NavLink to="/newPass">
                              <button className="Shop">Verify</button></NavLink>  
                              
                            
        </div>
    </div>
    )
}
export default OtpPassword