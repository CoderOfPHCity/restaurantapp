import React from 'react'
import "./styles/contact.css";

const Contact = () => {
  return (
    <div className='secBook'> 

       <div className='container'>

  <div className='.headPage'>
      <h2 className='contacthead'> Book Meals Now</h2>
  </div>
  <div className='bookF'>
    <form action='rewsre' className='form'>
      <div className='formG'>
        <input type= 'text' className='formI' placeholder='Fullname' id='name' required />
        <label for = 'name' className='formL'>Fullname</label>
      </div>
      <div className='formG'>
        <input type= 'email' className='formI' placeholder='Email' id='Email' required />
        <label for = 'name' className='formL'>Email address</label>
      </div>

      <div className='formG'>
        <button className='btn btn1'>Contact Us! &rarr;</button>

      </div>

    </form>

  </div>
  </div>

    <div className='footer'>
 
      <section className="contact-area contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center">

                        <div className="contact-social">
                            <ul>
                                <li><a className="hover-target" href="facebook.com/"><img alt="Qries" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" width= '34px'/></a></li>
                                <li><a className ="hover-target" href="linkedin.com/"><img alt="riies" src="https://www.kindpng.com/picc/m/363-3632986_logo-linkedin-png-rond-transparent-png.png" width= '34px'/></a></li>
                                <li><a className ="hover-target" href="telegram.com/"><img alt="Qriies" src="https://www.freepnglogos.com/uploads/telegram-logo-png-0.png" width= '34px' /></a></li>
                                <li><a className ="hover-target" href="twitter.com/"><img alt="Qriies" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" width= '34px' /></a></li>
      
    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
      <div className='logobox'>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="logo" className='logo'/>
      </div>
        <p>Copyright &copy; 2022  Built As Sidehustle capstone Project</p>
    </footer>
    </div>
    </div>
  
  )
}

export default Contact