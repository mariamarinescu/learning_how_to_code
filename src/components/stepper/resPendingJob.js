import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

const imgPersonal = require('../../assets/personal.png');
const imgSocial = require('../../assets/social.png')
const imgM = require('../../assets/methodical.png');

function resPendingJob() {
 
    return  <div id="pending">
                <h4 style={{display: 'block', margin: '0 auto', position: 'relative'}}>Even though at the beginning of my journey, I can state that I have:</h4>
    <div className="content">
    <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="card-front"
              src={imgPersonal}
              alt=""
              // style={{maxWidth:'90%',maxHeight:'80%'}}
            />
          </div>
          <div className="flip-card-back ">
          <h5 className="card-title">And the following sub-skills:</h5>
            <ul className="card-text">
              <li> I am a fast learner</li>
              <li> I am driven to continue to evolve towards reaching my full potential</li>
              <li>I am genuinely curious</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flip-card2">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={imgSocial}
              alt=""
              // style={{maxWidth:'70%',maxHeight:'20%'}}
            />
          </div>
          <div className="flip-card-back ">
          <h5 className="card-title"> And the following sub-skills:</h5>
            <ul className="card-text">
              <li> I am fully present with everyone I interact, caring about their needs and understand them </li>
              <li> I am one of the lucky ones, because, until this moment in time, I started to gain social and self awareness and it helps me at every step I take.</li>
            </ul>
          </div>
        </div>
      </div>
      
    
    
      <div className="flip-card3">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h5 className="card-title"></h5>
            <img
              className="card-front"
              src={imgM}
              alt=""
              // style={{maxWidth:'70%',maxHeight:'70%', margin: 'auto auto'}}
            />
          </div>
          <div className="flip-card-back">
            <h5 className="card-title">And the following sub-skills:</h5>
            <ul className="card-text">
              <li >delivery of value oriented.</li>
              <li>passionate about disruptive tech.</li>
              <li>eager to be part of a team that builds tomorrow's technology.</li>
              <li> resistant to pressure</li>
              <li>trying to combine artistic and technical thinking.</li>
              <li>eager to learn to code in Java.</li>
            </ul>
          </div>
        </div>
      
      {/* <div
        className="flip-card4"
    
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h5
              className="card-title"
            ></h5>
            <img
              className="card-front"
              src={imgPersonal}
              alt=""
              style={{width:'160px',height:'200px'}}
            />
          </div>
          <div className="flip-card-back">
            <h5
              className="card-title "
            
            >And the following sub-skills:</h5>
            <ul className="card-text">
         
              <li
              >delivery of value oriented.</li>
               <li
             >passionate about disruptive tech.
             </li>
           <li>eager to be part of a team that builds tomorrow's technology.</li>
           <li> resistant to pressure</li>
           <li>trying to combine artistic and technical thinking.</li>
           <li>eager to learn to code in Java.</li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
    </div>
    <h4>And also that I am <strong>not</strong>:</h4>
  
  <p> <CloseIcon style={{ width: "15px", height: "15px", color: 'black' }} /> clinging on the technologies I used so far, especially on the backend side </p>
  <p> <CloseIcon style={{ width: "15px", height: "15px", color: 'black' }} /> looking for a dull job to work at </p>
  <p> <CloseIcon style={{ width: "15px", height: "15px", color: 'black' }} /> doing the same things every day </p>
    </div>
  
       {/* <h4>Even though at the beginning of my journey, I can state that I am:</h4>
       <ul className="check">
         <li> a fast learner</li>
         <li> delivery of value oriented</li>
         <li> passionate about disruptive tech</li>
         <li> eager to be part of a team that builds tomorrow's technology</li>
         <li> driven to continue to evolve towards reaching my full potential</li>
         <li> fully present with everyone I interact, caring about their needs and understand them</li>
         <li> genuinely curious</li>
         <li> resistant to pressure => able to code in a high stress work environment </li>
         <li> one of the lucky ones, because, until this moment in time, I started to gain social and self awareness <br/>and it helps me at every step I take.</li>
         <li> trying to combine artistic and technical thinking 😁</li>
         <li> eager to learn to code in Java</li>
  
       </ul>
       */}
  
  
  
     
   
    // return <div className="content">
    //   <h4>Even though at the beginning of my journey, I can state that I am:</h4>
    //   <ul className="check">
    //     <li> a fast learner</li>
    //     <li> delivery of value oriented</li>
    //     <li> passionate about disruptive tech</li>
    //     <li> eager to be part of a team that builds tomorrow's technology</li>
    //     <li> driven to continue to evolve towards reaching my full potential</li>
    //     <li> fully present with everyone I interact, caring about their needs and understand them</li>
    //     <li> genuinely curious</li>
    //     <li> resistant to pressure => able to code in a high stress work environment </li>
    //     <li> one of the lucky ones, because, until this moment in time, I started to gain social and self awareness <br/>and it helps me at every step I take.</li>
    //     <li> trying to combine artistic and technical thinking 😁</li>
    //     <li> eager to learn to code in Java</li>
  
    //   </ul>
    //   <h4>And also that I am <strong>not</strong>:</h4>
  
    //   <p> <CloseIcon style={{ width: "15px", height: "15px" }} /> clinging on the technologies I used so far, especially on the backend side </p>
    //   <p> <CloseIcon style={{ width: "15px", height: "15px" }} /> looking for a dull job to work at </p>
    //   <p> <CloseIcon style={{ width: "15px", height: "15px" }} /> doing the same things every day </p>
  
  
  
    // </div>
    
  }

  export {resPendingJob}