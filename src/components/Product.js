import React from 'react'
import "./styles/product.css";
import myPhoto from '../Img/pic.jpeg';
import myPhoto1 from '../Img/pic2.jpg';
import myPhoto2 from '../Img/pic3.jpg';
import myPhoto3 from '../Img/cup1.jpg';

const Product = () => {
  return (
    <div>
       <section className='product1'>
   <div className='col-1-of-4' >

     <div className='featureBox'>
       <i> <img src={myPhoto} alt = 'ytdiyt' className='photo ph'/></i>
       <h3 className='FeatureH3'>Foodly Spicy</h3>
       <p className='featureBoxText'>lorem there is a place to give specific text for 
         each image, which means you can add
          some information about that image.
          each image, which means you can add
          

       </p>

     </div>
   </div>
   <div className='col-1-of-4' >

     <div className='featureBox'>
     <i> <img src={myPhoto1} alt = 'ytdiyt' className='Photo1 ph'/></i>
       <h3 className='FeatureH3'>Fresh tasty Beef</h3>
       <p className='featureBoxText'>lorem there is a place to give specific text for 
         each image, which means you can add
          some information about that image.
          each image, which means you can add
          

       </p>

     </div>
   </div>
   <div className='col-1-of-4' >
     <div className='featureBox'>
     <i> <img src={myPhoto2} alt = 'ytdiyt' className='photo2 ph'/></i>
       <h3 className='FeatureH3'>Roasted Chicken breast</h3>
       <p className='featureBoxText'>lorem there is a place to give specific text for 
         each image, which means you can add
          some information about that image.
          each each image, which meanseach image, which means add
          

       </p>

     </div>
   </div>
   <div className='col-1-of-4' >
   
     <div className='featureBox'>
       <i> <img src={myPhoto3} alt = 'ytdiyt' className='photo3 ph'/></i>
       <h3 className='FeatureH3'>Spicy pepper Sauce</h3>
       <p className='featureBoxText'>lorem there is a place to give specific text for 
         each image, which means you can add
          some information about that image.
          each image, which means you can add
          

       </p>

     </div>
   </div>

 </section>
    </div>
  )
}

export default Product