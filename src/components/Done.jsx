import React from "react";
import { MdDone, } from "react-icons/md";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Done = () => {
    return(
        <div className="Done-section">
           <div className="done-all">
            <div className="done">
              
                <MdDone className="done-icon"/>
                          </div> 
                          <div className="my-3">
                            <h2>Order Done</h2>
                            </div>        
  
                                  <NavLink to="/">
                                  <button className="Shop">get to Home Page</button></NavLink>  
                                  
                                
           </div>
            
          
        </div>
    )
}

export default Done