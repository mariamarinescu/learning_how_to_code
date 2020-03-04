import React from 'react';
import VerticalLinearStepper from '../second-stepper/SecondStepper.component'

const WCSprefix = "https://www.wildcodeschool.com/en-GB";


function resWCS() {
    return <div className="content1">
      <h3><a href={`${WCSprefix}/trainings/web-developer-full-time?campus=bucharest`} target="_blank" rel="noopener norefferer" className="s"> Wild Code School Romania</a> - Full-stack Javascript Developer Course</h3>
      <h5 >Instructor: <a href="https://www.linkedin.com/in/cosmin-andrei-con%C8%9Bu-05144a103/" target="_blank" rel="noopener norefferer" > Cosmin Contu</a></h5>
  
      <ul>
        <li>Program : <a href={`${WCSprefix}/trainings/web-developer-full-time?campus=bucharest`} target="_blank" rel="noopener norefferer"> JS Fullstack Developer Bootcamp</a></li>
        <li> Course syllabus: <a href={`${WCSprefix}/trainings/web-developer-full-time?campus=bucharest&fbclid=IwAR1KjYFSgZ19fB-vj1wsNuiu_FKE17ytp3_7ZuEaYj3gYsG6Ku89mmW0Eok`}
          target="_blank" rel="noopener norefferer"> Click Me</a></li>
        <li>From day one we started to work as teams, using Agile Methodologies, using <a href="https://www.trello.com" target="_blank" rel="noopener norefferer">
          Trello</a> for tasks,<br /> scrum sprints and sprints backlog.</li>
  
        <li>3 team projects:</li>
      </ul>
      <VerticalLinearStepper />
    </div>
  };

  export {resWCS};