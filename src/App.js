
import React, { useState } from 'react';
import Header from './Header';
import FeedbackData from './FeedbackData';
import FeedbackList from './FeedbackList';
import Feedbackform from './components/Feedbackform';
import FeedbackStats from './components/FeedbackStats';
import { v4 as uuidv4 } from 'uuid'
import Aboutpage from './pages/Aboutpage';
import AboutLink from './components/AboutLink';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

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
    <Router> 
    <Header />
     <div className="container">
       <Routes> 
       <Route exact path='/' element= {
          <>
            <Feedbackform handleAdd ={addFeed}/>
            <FeedbackStats feedback = {feedback} />
            <FeedbackList feedback = {feedback}
            handleDelete={handleDelete} />
         </>
       }
          
       ></Route>
       
       
        <Route path='/about' element={<Aboutpage />} />
        </Routes>
      <h1>Welcome from the feedback feedback</h1>
      <AboutLink />
    </div>
    </Router>
   
  );
}

export default App;
