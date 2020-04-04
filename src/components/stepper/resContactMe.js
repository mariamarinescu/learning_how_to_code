import React from 'react';
 
 
 function resContactMe() {
    return  <div className="portfoliocard">
    <div className="coverphoto"></div>
    <div className="left_col">
    <h2 className="name">Maria Marinescu</h2>
      <h3 className="location">Bucharest, RO</h3>
      <ul className="contact_information">
        <li className="work">Junior JS Developer</li>
        <li className="website"><a className="nostyle" href="https://my-journey-through-programming.firebaseapp.com/" target="_blank" rel="noopener noreferrer">this.website</a></li>
        <li className="mail" style={{ fontSize: '12px' }}><a href="mailto:mariafmarinescu@outlook.com">mariafmarinescu@outlook.com</a></li>
        <li className="resume"><a href="https://firebasestorage.googleapis.com/v0/b/my-journey-through-programming.appspot.com/o/resume.pdf?alt=media" target="_blank" rel="noopener noreferrer">view resume</a></li>
      </ul>
    </div>
    {/* <div className="right_col">
      
    </div> */}
    </div>
    
    
    }


    export  {resContactMe};