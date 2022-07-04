import React from 'react'

function FeedbackStats({feedback}) {

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length


  return (
    <div className='feedback-stats'>

        <h3>{feedback.length} Reviews</h3>
        <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </div>
  )
}

export default FeedbackStats