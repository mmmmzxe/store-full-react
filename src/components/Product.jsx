import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'
import { Swiper, SwiperSlide } from "swiper/react";
import { FaEye, FaCartPlus, FaHeart } from 'react-icons/fa';

import { useParams } from 'react-router'
import { useState } from 'react';
import RatingStars from './buttons/star'
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index'


import 'swiper/css'

const Product = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
 
    {/* Now we need a product id which is pass from the product page. */ }
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const item = proDetail[0];


    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (item) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(item))

        }
        else {
            dispatch(delItem(item))
            setCartBtn("Add to Cart")
        }
    }
   


    const cardItem = (item) => {
        return (
      
            
            
           
            <div className="card my-5 py-4" key={item.id} style={{width: "19rem"}}>
              

                <div className='cart-button'> 
                 <FaHeart className="b mx-2" >
              
            </FaHeart></div>
           
                <img src={item.img} class=" " alt={item.title}/>
                    <div className="card-body ">
                        <h5 className="card-title">{item.title}</h5>
                        <div className='div'>
                        <p className='px-2 '>${item.price}</p>

                        <p className='text'>${item.oldprice}</p>

                    </div>
                        <RatingStars 
                        rating={item.rating } />
                  
                    </div>
                 
                    <div className='flex buttn'>
                    <NavLink to={`/products/${item.id}`}> 
      <FaEye className='bu'/> </NavLink>
<button className='cart-b'><FaCartPlus onClick={() => handleCart(item)} className=''>{cartBtn}</FaCartPlus></button>




</div>
</div>

                );
    }

                return (
                    <div >
                        <div className='All-P'>
            <h2>All Products</h2>
        </div>
                          
                    <Swiper slidesPerView={1}
                    
                    className='productSlider '
    
                >
                    
                    <SwiperSlide >
                        <div className="container">
                       
                            <div className=" row grid justify-content-around">
                                {DATA.map(cardItem)}
                            </div>
                           
                        </div> </SwiperSlide>
    
                    <SwiperSlide className=''>
                        <div className="container">
                            <div className="row justify-content-around">
                                {DATA.map(cardItem)}
                            </div>
    
                        </div> </SwiperSlide>
    
                </Swiper>
              </div>  )
}

                export default Product
