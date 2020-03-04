import React from 'react';
 
 
 function resContactMe() {
    return  <div class="portfoliocard">
    <div class="coverphoto"></div>
    <div class="profile_picture"></div>
    <div class="left_col">
    <h2 className="name">Maria Marinescu</h2>
      <h3 className="location">Bucharest, RO</h3>
      <ul className="contact_information">
        <li className="work">Junior JS Developer</li>
        <li className="website"><a className="nostyle" href="https://my-journey-through-programming.firebaseapp.com/" target="_blank">this.website</a></li>
        <li className="mail" style={{ fontSize: '12px' }}><a href="mailto:mariafmarinescu@outlook.com">mariafmarinescu@outlook.com</a></li>
        <li className="phone">+40722.868.038</li>
        <li class="resume"><a href="https://firebasestorage.googleapis.com/v0/b/my-journey-through-programming.appspot.com/o/resume.pdf?alt=media" target="_blank" class="nostyle">download resume</a></li>
      </ul>
    </div>
    <div className="right_col">
      
    </div>
    </div>
    
    
    }


    export  {resContactMe};