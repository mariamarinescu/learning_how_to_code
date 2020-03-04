import React from 'react';
const WCSprefix = "https://www.wildcodeschool.com/en-GB";


function resWCSContest() {
    return <div className="content1">
      <h3>SkillValue & Wild Code School Romania</h3>
      <p>Contest checkmarks:</p>
      <ul className="check">
        <li> SkillValue Quiz</li>
        <li> Earn all required badges for: <a href="https://www.codecademy.com/users/MariaMarinescu/achievements" target="_blank" rel="noopener norefferer" > Code Academy</a> and <a href="https://www.sololearn.com/Profile/4152053" target="_blank" > SoloLearn</a></li>
        <li> Fully responsive final project based on requirements: <br /><a href="https://codepen.io/rria/pen/MWgqQzx" target="_blank" rel="noopener norefferer" className="s"> Project Link - click me</a></li>
      </ul>
      <h4> <a href="https://www.facebook.com/wildcodeschoolromania/posts/500527294080499:0" target="_blank" rel="noopener norefferer" className="s"> Winner announcement - click me</a></h4>
      <hr />
      <h4>Prize details:</h4>
      <ul>
        <li>School: <a href={WCSprefix} target="_blank" rel="noopener norefferer" > Wild Code School - click me</a></li>
        <li>Program : <a href={`${WCSprefix}/trainings/web-developer-full-time?campus=bucharest`} target="_blank" rel="noopener norefferer"> JS Full-stack Developer Bootcamp - click me</a></li>
        <li>Duration: 752h / 5 months</li>
        <li>Starting Date: 29.07.2019</li>
        <li>Ending Date: 21.02.2020</li>
      </ul>
    </div>
  };


  export {resWCSContest};