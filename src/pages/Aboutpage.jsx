import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function Aboutpage() {
  return (
      <Card>
          <div className='about'>Aboutpage 
          <h1>This is my about page</h1>
          <p>thank you for visiting, what can i do for you?</p> 
          <p>Version 1.0.0</p>

          <p>
              <Link to='/'>Back to Home</Link>
          </p>
      
         </div>
      
      
      </Card>
    
  )
}

export default Aboutpage