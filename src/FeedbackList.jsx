import React from 'react'
import FeedbackItem from  './FeedbackItem'
import {useContext} from 'react'
import feedbackContext from './components/context/feedbackContext'

function FeedbackList () {

    const {feedback} = useContext(feedbackContext)
    
    if (!feedback || feedback.length ===0){
        return <p>No feedback</p>
    }
  return (
    <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} 
                item={item}
                 />
            )
        )}

    </div>
  )
}

export default FeedbackList
