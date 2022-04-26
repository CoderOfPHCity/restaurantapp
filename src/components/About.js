import React from 'react'
import "./styles/About.css";
import myPhoto from '../Img/elon.jpg';
import myPhoto8 from '../Img/nft.jpg';
import myPhoto9 from '../Img/nft2.jpg';

const About = () => {
  return (
    <div>
        <div className="about-section">
<h1>About Us Page</h1>
<p>lorem do  always see a future in the blockchain and 
  web3 ,the knowledge of blockchain is important to me so
   as to get my feet up and running on the web3 ecosystem.
I will really love to build some very innovative projects
 on the blockchain network centered on helping Africa 
women break into the blockchain ecosystem as well..</p>
<p> way.</p>
</div>
<div className='contactsec'>
<h2 className='h22'>Our Team</h2>
<div className="row">
  <div className="column">
  <div className="card">
   <img src={myPhoto} alt="Jane" className='imgAbout' />
    <div className="container1">
    <h2>Daniel Agantem</h2>
     <p className="title">CEO & Founder</p>
     <p>e lorem ipsum  .</p>
      <p></p>
      <p><button className="button">Contact</button></p>
      </div>
      </div>
    </div>

    <div class="column">
        <div class="card">
        <img src={myPhoto8} alt="Mike" className='imgAbout'/>
        <div class="container1">
        <h2>Barmzy</h2>
          <p class="title">Frontend Dev</p>
          <p>e lorem ipsum ipsum .</p>
        <p></p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
      <img src= {myPhoto9} alt="John" className='imgAbout'/>
      <div className="container1">
      <h2>John Max</h2>
        <p className="title">Designer</p>
        <p> lorem ipsum lorem ipsum .</p>
        <p></p>
        <p><button  className="button">Contact</button></p>
        </div>
    </div>
    </div>
</div>
</div>

    </div>
  )
}

export default About