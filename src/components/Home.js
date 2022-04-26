import React from 'react';
import "./styles/Home.css";
import "./styles/product.css";

import myImage from '../Img/pic.jpeg';
import myImage2 from '../Img/pic2.jpg';
import myImage3 from '../Img/pic3.jpg';

 
const Home = () => {
  


  return(
    <div className='bc'>
<h3>Tasty Meals for Everyone</h3>
      <section className='Float'>
         <div className='header'> 
 <div className='row' >
  
<p className='headPage'>
  <h1 className='btn'>it's not just <br></br> Food, It's an<br></br> Experience</h1>
<a href='eulgi' className='btn'>Order Now &rarr;</a></p>

</div>
<div className='header1'>
       <img src={myImage} alt = 'ytdiyt' className='imgg1 imgg'/>
       <img src={myImage2} alt = 'ytdyt' className='imgg2 imgg'/>
       <img src={myImage3} alt = 'yiyt' className='imgg3 imgg'/>
    </div>

</div>
      </section>
 
         
 



    </div>
  )
}

export default Home