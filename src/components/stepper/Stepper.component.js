import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VerticalLinearStepper from '../second-stepper/SecondStepper.component'
import CloseIcon from '@material-ui/icons/Close';
import StepLabel from '@material-ui/core/StepLabel';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './Stepper.component.css';
import * as imgMobile from '../../assets/click.png';
import * as imgDesktop from '../../assets/rsz_mouse.png';
const WCSprefix = "https://www.wildcodeschool.com/en-GB";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative',
    fontSize: '140%',
    height: 'auto',
    width: 'auto',
    top: '100px',
    position: 'relative'
  },
  buttons: {
    left: '5%',
    position: 'relative'
  },

  clickMobile: {
    width: '33px',
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {

    },
    [theme.breakpoints.up('sm')]: {
      left: '13%',
      top: '0px!important'
    },
    [theme.breakpoints.up('md')]: {
      left: '13%',
      top: '0px!important'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },

  },
  clickDesktop: {
    width: '48px',
    height: '48px',
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      left: '31.6%',
      top: '77px',
      display: 'inline-block'
    },

  },
  stepper1: {
    // margin: '0 auto'
  },
  button: {
    marginRight: theme.spacing(3),
    margin: 6
  },
  completed: {
    // margin: '0 auto'
  },
  instructions: {
    // margin: '0 auto'
  },
}));

function getSteps() {
  return ['Web Programming I', 'Self-study', 'Scholarship contest', 'JS Full-stack Developer Bootcamp', 'Full-stack Developer'];
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
    <a href="https://www.academiacredis.ro/curs-programare-web1" target="_blank" rel="noopener norefferer" style={{ fontSize: '144%' }}>Course - click me</a>
  </div>
};
function resSelfStudy() {
  return <div className="content">
    <ul className="check">
      <li>
        I started to study between 7h - 12h/day on platforms as:
          <a href="https://pluralsight.com" target="_blank" rel="noopener norefferer"> PluralSight.com</a>,
          <a href="https://safaribooksonline.com" target="_blank" rel="noopener norefferer"> Safari Books Online</a>
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
        <a href="https://alexandraciausu-a6df7.firebaseapp.com/" target="_blank" rel="noopener norefferer">- Make-up Artist Portfolio Website - click me</a> <br />
        <a href="https://github.com/mariamarinescu/MUA_portfolio" target="_blank" rel="noopener norefferer">- GitHub Repo - click me</a>
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
      <li> Fully responsive final project based on requirements: <a href="https://codepen.io/rria/pen/MWgqQzx" target="_blank" rel="noopener norefferer">Project Link - click me</a></li>
    </ul>
    <h4> <a href="https://www.facebook.com/wildcodeschoolromania/posts/500527294080499:0">Winner announcement - click me</a></h4>
    <h4>Prize details:</h4>
    <ul>
      <li>School: <a href={WCSprefix} target="_blank" rel="noopener norefferer">Wild Code School - click me</a></li>
      <li>Program : <a href={`${WCSprefix}/trainings/web-developer-full-time?campus=bucharest`} target="_blank" rel="noopener norefferer">JS Fullstack Developer Bootcamp - click me</a></li>
      <li>Duration: 752h / 5 months</li>
      <li>Starting Date: 29.07.2019</li>
      <li>Ending Date: 21.02.2020</li>
    </ul>
  </div>
};
function resWCS() {
  return <div className="content">
    <h3><a href={`${WCSprefix}/trainings/web-developer-full-time?campus=bucharest`} target="_blank" rel="noopener norefferer">Wild Code School Romania</a> - Fullstack Javascript Developer Course</h3>
    <h5 >Instructor: <a href="https://www.linkedin.com/in/cosmin-andrei-con%C8%9Bu-05144a103/" target="_blank" rel="noopener norefferer">Cosmin Contu</a></h5>

    <ul>
      <li>Program : <a href={`${WCSprefix}/trainings/web-developer-full-time?campus=bucharest`} target="_blank" rel="noopener norefferer"> JS Fullstack Developer Bootcamp</a></li>
      <li>Course syllabus: <a href={`${WCSprefix}/trainings/web-developer-full-time?campus=bucharest&fbclid=IwAR1KjYFSgZ19fB-vj1wsNuiu_FKE17ytp3_7ZuEaYj3gYsG6Ku89mmW0Eok`}
        target="_blank" rel="noopener norefferer">Click Me</a></li>
      <li>3 team projects:</li>
    </ul>
    <VerticalLinearStepper />
  </div>
};
function resPendingJob() {
  return <div className="content">
    <h4>Even though at the beginning of my journey, I can state that I am:</h4>
    <ul className="check">
      <li> fast learner</li>
      <li> delivery of value oriented</li>
      <li> passionate about disruptive tech</li>
      <li> eager to be part of a team that builds tomorrow's technology</li>
      <li> driven to continue to evolve towards reaching my full potential</li>
    </ul>
    <h4>And also that I am <strong>not</strong>:</h4>

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

function HorizontalNonLinearStepper(move) {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const totalSteps = () => {
    return steps.length;
  };

  const isStepOptional = step => {
    return step === 1;
  };


  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ?
        steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };






  const isStepSkipped = step => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
  }

  return (
    <Grid item
      xs={11} sm={11} md={10} lg={10} xl={10}
    >
      <div className={classes.root}>
        <img src={imgMobile} className={classes.clickMobile} id="clickmobile" />
        <img src={imgDesktop} className={classes.clickDesktop} id="clickdesktop" />
        <Stepper alternativeLabel activeStep={activeStep} id="stepper" style={{ flexGrow: 0 }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const buttonProps = {};
            if (isStepOptional(index)) {

            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps} classes={{
                root: classes.step,
                completed: classes.completed,
                active: classes.active
              }} >
                <StepLabel onClick={handleStep(index)}
                    completed={isStepComplete(index)}>
                  <StepButton
                    
                    {...buttonProps}
                  >

                    {label}
                  </StepButton></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <div>
            <Typography className={classes.instructions}></Typography>
            <div>{getStepContent(activeStep)}</div>
            <div className={classes.buttons}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                disabled={activeStep === 4}
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}

              >
                Next
              </Button>
            </div>
          </div>

        </div>
      </div>
    </Grid>
  );
}


export default withRouter(HorizontalNonLinearStepper); 