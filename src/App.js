
import React, { useState } from 'react';
import Header from './Header';
import FeedbackData from './FeedbackData';
import FeedbackList from './FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
  
  const [feedback, setfeedback] = useState(FeedbackData);
  const handleDelete = (id) => {

    if (window.confirm('Do yo want to delete this feedback?')){
       setfeedback(feedback.filter((item) => item.id !== id))
    }
   
  }


  return (
    <> 
    <Header />
     <div className="container">
       <FeedbackStats feedback = {feedback} />
       <FeedbackList feedback = {feedback}
        handleDelete={handleDelete} />
      <h1>Welcome from the feedback feedback</h1>
    </div>
    </>
   
  );
}

export default App;
