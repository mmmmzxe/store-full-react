import React from 'react'
import Product from './Product'
import Categories from './categories'
const Home = () => {
    return (
        <div>
          
          <div className='home'>
                <div className='text-home'>
<h1>Find The Best style for you</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, fugiat quae. Repudiandae quidem deserunt, 
    neque modi error numquam, aperiam rerum corrupti asperiores maxime autem necessitatibus in veritatis optio fugiat culpa.</p>
    <button className='Shop'>Shop Now</button>
                </div>
                <div className='img-home'>
                    <img src='/assets/images/home/img1.jpeg'></img>
                </div>

            </div>
           
            
                        <Categories/>
                      <hr></hr>
                        <Product/>
                    </div>
                    )
}

                    export default Home
