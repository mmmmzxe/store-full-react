import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'

import { FaHeart } from 'react-icons/fa';

const ProductDetail = () => {
    const[qunatity , setQunatity]= useState(0);
  
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const [fevoriteBtn, setFavorite] = useState("")
 
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
  

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }
    const handleFavorite = (item) => {
        if (fevoriteBtn === "") {
            dispatch(addItem(item))
           
        }
        else{
            dispatch(delItem(item))
            setFavorite("")
        }
    }
const handleDecrement = () =>{
    if(qunatity > 0){
       setQunatity(prevCount=>prevCount-1) 
       dispatch(delItem(product))
    }
    
   
    }
    const handleIncrement = () =>{
        if(qunatity < 10){
            setQunatity(prevCount=>prevCount+1) 
            dispatch(addItem(product))
         }
         
        
        }
      
    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.img} alt={product.title} height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                   
                    <div className='div'>
                                                    <h2 className='px-2 t'>${product.price}</h2>
                                                 
                                                        <h3 className='text'>${product.oldprice}</h3>
                                                   
                                                </div>
                                                <div className='item-size'>
                                                    <div className='mx-4 my-4 item'>
                                                        Item Size
                                                    </div>
                                                    <div className='sizeall'>
                                                        <button className='cart-b mx-2 hover '>S</button>
                                                        <button className='cart-b mx-2 hover '>N</button>
                                                        <button className='cart-b mx-2 hover'>L</button>
                                                        <button className='cart-b mx-2 hover'>XL</button>
                                                        <button className='cart-b mx-2 hover'>XXL</button>
                                                    </div>
                                                </div>
                                                <h2 className='Description'>Description</h2>
                    <p className="lead">{product.desc}</p>
                    <div className='div'>
                        <button type='button'className='cart-b mx-2 hover' onClick={handleDecrement}>-</button>
                        <div className='mx-2 my-2 item'>{qunatity}</div>
                        <button type='button' className='cart-b mx-2 hover' onClick={handleIncrement}>+</button>
                        
                    </div>
                    <div className=''> 
                     <button onClick={()=>handleCart(product)} className="cart mx-4 my-2">{cartBtn}</button>
                    <button onClick={()=>handleFavorite(product)} className="cart-b mx-4 my-2"><FaHeart/>{fevoriteBtn}</button>
                    
                    </div>
                  
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDetail
