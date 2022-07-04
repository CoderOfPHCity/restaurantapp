
import React, { useState } from 'react';
import Header from './Header';
import FeedbackData from './FeedbackData';
import FeedbackList from './FeedbackList';


function App() {
  
  const [feedback, setfeedback] = useState(FeedbackData);



  return (
    <> 
    <Header />
     <div className="App">
       <FeedbackList feedback = {feedback} />
      <h1>Welcome from the feedback feedback</h1>
    </div>
    </>
   
  );
}

export default App;
