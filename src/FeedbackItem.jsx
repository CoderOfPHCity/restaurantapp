import React from 'react'

function FeedbackItem({ item }) {
  return (
    <div classname ='card'>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
      
    </div>
  )
}

export default FeedbackItem
