import React, {useLayoutEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepLabel from '@material-ui/core/StepLabel';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {resContactMe} from './resContactMe';
import {resPendingJob} from './resPendingJob';
import {resWCS} from './resWCS';
import {resCredis} from './resCredis';
import {resSelfStudy} from './resSelfStudy';
import {resWCSContest} from './resWCSContest';
import Example from '../snackbar/Snackbar.component';



// import firebase from 'firebase';

import './Stepper.component.css';
require('dotenv').config();

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '3vh'
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
  },
  button: {
    marginRight: theme.spacing(3),
    margin: 44
  },
  completed: {
  },
  instructions: {
    fontSize: 4, 
    marginTop: '33px',
    position: "relative",
    margin: '33px'
    // margin: '0 auto'
  },
}));
function getSteps() {
  return ['Web Programming I', 'Self-study', 'Scholarship contest', 'JS Full-stack Developer Bootcamp', 'Full-stack Developer', 'Contact me'];
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
    case 5:
      return resContactMe();
    default:
      return 'Unknown step';
  }
}

function HorizontalNonLinearStepper() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [skipped, setSkipped] = React.useState(new Set());
  const [show, setShow] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const steps = getSteps();

  useLayoutEffect(() => {
    setCount(count + 1);
      if(count >= 2) {
        setShow(false)
      } else setShow(true)
  }, [])
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
  const goBack = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ?
        steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
    goBack();
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    goBack();
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
      xs={12} sm={12} md={12} lg={12} xl={12}
    >
                  <Example show={show}/>

      <div className={classes.root}>
       
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
              }}
                onClick={handleStep(index)}
                completed={isStepComplete(index)} >
                <StepLabel  >
                  <StepButton id="bttn-sttp"
                    {...buttonProps}
                  >

                    {label}
                  </StepButton></StepLabel>
              </Step>
            );
          })}
        </Stepper>
    
              
         
            <Typography className={classes.instructions}></Typography>
            <div>{getStepContent(activeStep)}</div>
            <div className={classes.buttons}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                disabled={activeStep === 5}
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}

              >
                Next
              </Button>

            </div>
          </div>

      
  
    </Grid>
  );
}


export default withRouter(HorizontalNonLinearStepper); 