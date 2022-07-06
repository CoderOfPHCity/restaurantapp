
import React, { useState } from 'react';
import Header from './Header';
import FeedbackData from './FeedbackData';
import FeedbackList from './FeedbackList';
import Feedbackform from './components/Feedbackform';
import FeedbackStats from './components/FeedbackStats';
import { v4 as uuidv4 } from 'uuid'

function App() {
  
  const [feedback, setfeedback] = useState(FeedbackData);
  const addFeed = (newFeedback) => {
    newFeedback.id = uuidv4()
    setfeedback([newFeedback, ...feedback])


  }
  const handleDelete = (id) => {

    if (window.confirm('Do yo want to delete this feedback?')){
       setfeedback(feedback.filter((item) => item.id !== id))
    }
   
  }



  return (
    <> 
    <Header />
     <div className="container">
       <Feedbackform handleAdd ={addFeed}/>
       <FeedbackStats feedback = {feedback} />
       <FeedbackList feedback = {feedback}
        handleDelete={handleDelete} />
      <h1>Welcome from the feedback feedback</h1>
    </div>
    </>
   
  );
}

export default App;
