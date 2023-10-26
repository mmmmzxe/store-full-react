import React from "react";
import Swiper from "react-id-swiper";

import {  FaTshirt } from 'react-icons/fa'
import {  GiAmpleDress , GiArmoredPants , GiShoppingBag} from 'react-icons/gi'
import '../swiperr.css'
const Categories = () => {

  const params = {
    slidesPerView: 4,
    spaceBetween: 50,

 
  };
  return (
    <div className="s2 ">
        <div>
            <h2>Categories</h2>
        </div>
    <Swiper  {...params}  >
      <div><FaTshirt className="icon"/></div>
      <div><GiAmpleDress className="icon"/></div>
      <div><GiArmoredPants className="icon"/></div>
      <div><GiShoppingBag className="icon"/></div>
      <div><FaTshirt className="icon"/></div>
      <div><GiShoppingBag className="icon"/></div>
   

    </Swiper>
    </div>

  );
};

export default Categories;