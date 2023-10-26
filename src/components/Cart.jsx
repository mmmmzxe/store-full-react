import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'
import { FaEye, FaCartPlus, FaHeart } from 'react-icons/fa';

const Cart = () => {
   

    var total = 0;
    const state = useSelector((state)=> state.addItem)
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
       

        return(
            
            <div>
      
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="300px" width="300px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <div className='div'>
                                                    <h2 className='px-2 t'>${cartItem.price}</h2>
                                                 
                                                        <h3 className='text'>${cartItem.oldprice}</h3>
                                                   
                                                </div>
                                                <p className="lead">{cartItem.desc}</p>
                                                
                                                <NavLink to={`/products/${cartItem.id}`}><FaEye className='bu' /></NavLink>
                        </div>
                    </div>
                </div>
               

            </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                    
      
  
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-warning">Your cart</span>
                            <span className="badge bg-warning rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                <div className="row">
                    <NavLink to="/checkout" className="checkout  mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
              
            </div>
        );
    }

    return (
        <>
           
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart
