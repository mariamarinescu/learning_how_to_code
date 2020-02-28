import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import VerticalLinearStepper from '../second-stepper/SecondStepper.component'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
      flexGrow: '0!important'
  
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Web Programming I', 'Self-study', 'Scholarship contest', 'JS Fullstack Developer Bootcamp', 'FullStack Developer'];;
}
function resCredis() {
    return <div className="content">
        <h3>Web Programming I - Client Side Technologies</h3>
        <h3>HTML, CSS and JS fundamentals</h3>
        <h3><a href="https://www.academiacredis.ro" target="_blank" rel="noopener norefferer">Credis Academy</a></h3>
        <h5 >Instructor: <a href="https://www.linkedin.com/in/theodor-tanase/" target="_blank" rel="noopener norefferer">Theodor Tanase</a></h5>
        <p>During the 'Web Programming I' course, administrated by an underside instructor, I learnt about:</p>
        <ul className="check">
            <li> HTML Basics</li>
            <li> CSS standards and good practices</li>
            <li> Creating modern responsive Web pages</li>
            <li> JavaScript basics</li>
            <li> Accessing and manipulating the DOM using jQuery</li>
            <li> Asynchronous programming in JavaScript</li>
            <li> Interacting with HTTP server</li>
        </ul>
        <a href="https://www.academiacredis.ro/curs-programare-web1"  target="_blank" rel="noopener norefferer" style={{fontSize: '144%'}}>Course - click me</a>
    </div>
  };
  function resSelfStudy() {
    return <div className="content">
        <ul className="check">
            <li>
                I started to study between 7h - 12h/day on platforms as:
            <a href="https://pluralsight.com" target="_blank" rel="noopener norefferer"> PluralSight.com</a>,
            <a href="safaribooksonline.com"  target="_blank" rel="noopener norefferer"> Safari Books Online</a>
            </li>
            <hr />
  
            <li>
                I started to learn modern technology stack, settled to use in the project:
                <ul id="not-checked">
                    <li> Back-end (serverless): Node.js with TypeScript, Google Firebase Functions, SendGrid (send e-mail via contact form)</li>
                    <li> Front-end: TypeScript, Angular8, SASS, i18n(multi-language support), Google Firebase: WebApp, Authentication, Storage </li>
  
                </ul>
            </li>
            <hr />
            <li> After about 6 months of hard work I managed to have this: <br />
                <a href="https://alexandraciausu-a6df7.firebaseapp.com/"target="_blank" rel="noopener norefferer">- Make-up Artist Portfolio Website - click me</a> <br />
                <a href="https://github.com/mariamarinescu/make-up_artist_portfolio" target="_blank" rel="noopener norefferer">- GitHub Repo - click me</a>
            </li>
        </ul>
        <p></p>
    </div>
  }
  function resWCSContest() {
    return <div className="content">
        <h3>SkillValue & Wild Code School Romania</h3>
        <p>Contest checkmarks:</p>
        <ul className="check">
            <li> SkillValue Quiz</li>
            <li> Earn all required badges for: <a href="https://www.codecademy.com/users/MariaMarinescu/achievements" target="_blank" rel="noopener norefferer">Code Academy</a> and <a href="https://www.sololearn.com/Profile/4152053" target="_blank">SoloLearn</a></li>
            <li> Fully responsive final project based on requirements: <a href="https://codepen.io/rria/pen/MWgqQzx"target="_blank" rel="noopener norefferer">Project Link - click me</a></li>
        </ul>
        <h4> <a href="https://www.facebook.com/wildcodeschoolromania/posts/500527294080499:0">Winner announcement - click me</a></h4>
        <h4>Prize details:</h4>
        <ul>
            <li>School: <a href="https://www.wildcodeschool.com/" target="_blank" rel="noopener norefferer">Wild Code School - click me</a></li>
            <li>Program : <a href="https://www.wildcodeschool.com/en-GB/trainings/web-developer-full-time?campus=bucharest" target="_blank" rel="noopener norefferer">JS Fullstack Developer Bootcamp - click me</a></li>
            <li>Duration: 700h / 5 months</li>
            <li>Starting Date: 29.07.2019</li>
            <li>Ending Date: 21.02.2020</li>
        </ul>
  
        {/* <img src="https://skillvalue.com/static/media/ImageHackathon/SKILLVALUE_20190902_GetWildJS_500x700px_EN_01.jpg" width="300px" height="500px"/> */}
    </div>
  };
  function resWCS() {
    return <div className="content">
        <h3><a href="https://www.wildcodeschool.com/en-GB" target="_blank" rel="noopener norefferer">Wild Code School Romania</a> - Fullstack Javascript Developer Course</h3>
        <h5 >Instructor: <a href="https://www.linkedin.com/in/cosmin-andrei-con%C8%9Bu-05144a103/" target="_blank" rel="noopener norefferer">Cosmin Contu</a></h5>
  
        <ul>
            <li>Program : <a href="https://www.wildcodeschool.com/en-GB/trainings/web-developer-full-time?campus=bucharest" target="_blank" rel="noopener norefferer"> JS Fullstack Developer Bootcamp</a></li>
            <li>Course syllabus: <a href="https://www.wildcodeschool.com/en-GB/trainings/web-developer-full-time?campus=bucharest&fbclid=IwAR1KjYFSgZ19fB-vj1wsNuiu_FKE17ytp3_7ZuEaYj3gYsG6Ku89mmW0Eok" target="_blank" rel="noopener norefferer">Click Me</a></li>
            <li>From day one we started to work as teams, using Agile Methodologies, using <a href="https://www.trello.com" target="_blank" rel="noopener norefferer">Trello</a> for task for Scrum sprints and sprints backlog.</li>
            <li>3 team projects:</li>
        </ul>
        <VerticalLinearStepper />
  
  
        {/* <img src="https://skillvalue.com/static/media/ImageHackathon/SKILLVALUE_20190902_GetWildJS_500x700px_EN_01.jpg" width="300px" height="500px"/> */}
    </div>
  };
  function resPendingJob() {
    return <div className="content">
        <h4>Even though at the beginning of my journey, I can state that I am:</h4>
        <ul className="check">
            <li> fast learner</li>
            <li> delivery of value oriented</li>
            <li> passionate about disruptive tech</li>
            <li> committed to deliver value to customers</li>
            <li> eager to be part of a team that builds tomorrow's technology</li>
            <li> driven to continue to evolve towards reaching my full potential</li>
        </ul>
        <h4>And also that I am not:</h4>
  
        <p> <CloseIcon style={{ width: "15px", height: "15px" }} /> clinging on the technologies I used so far, especially on the backend side </p>
        <p> <CloseIcon style={{ width: "15px", height: "15px" }} /> looking for a dull job to work at </p>
        <p> <CloseIcon style={{ width: "15px", height: "15px" }} /> doing the same things every day </p>
  
  
  
    </div>
  }
function getStepContent(step) {
    switch (step) {
        case 0:
            return resCredis();
        case 1:
            return resSelfStudy();
        case 2:
            return resWCSContest();
        case 3:
            return resWCS();
        case 4:
            return resPendingJob();

        default:
            return 'Unknown step';
    }
}

export default function MobileStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);

  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}