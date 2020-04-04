import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
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
    return ['Walking Tour Of Bucharest - team project I', 'ISS tracker - team project II', 'Techir Interactive Platform - team project III (real client)'];
}
function setContent(props) {
    if (props === 0) {
        return <div>
            <a href="https://rriamarria.github.io/walking_in_bucharest/" target="_blank" rel="noopener noreferrer"  className='s'> View Website</a><br/>
            <a href="https://github.com/rriamarria/walking_in_bucharest" target="_blank"  rel="noopener noreferrer" className='s'> View GitHub Repo</a>
        <ul>
      <li>Front-end: HTML, CSS and JavaScript</li>
      </ul>
    </div>
    } else if (props === 1) {
        return <div>
            <a href="http://rriamarria.github.io/real_time_iss_tracker" target="_blank" rel="noopener noreferrer" className='s'> View Website</a><br/>
            <a href="https://github.com/rriamarria/real_time_iss_tracker" target="_blank" rel="noopener noreferrer" className='s'> View GitHub</a>
            <ul>
          <li>Front-end: React, Axios, React-Bootstrap</li>
          </ul>
        </div>
    } else if (props === 2) {
        return <div>
            <a href="https://wildcodeschool.github.io/bucharest-project3-interactive-platform/" target="_blank" rel="noopener noreferrer" className='s'> View Website</a><br/>
            <a href="https://github.com/WildCodeSchool/bucharest-project3-interactive-platform/tree/develop" target="_blank" rel="noopener noreferrer" className='s'> View GitHub</a>
            <ul>
                <li>Datastore: MySql</li>
                <li>Back-end: Node.js, Express, Sequalize, JWT, Passport.js, Redux</li>
                <li>Front-end: React, Axios, React-Bootstrap</li>
                <li>Backend hosted on Heroku</li>
                <li>Frontend hosted on GitHub Pages</li>
            </ul>
        </div>
    }
}
function getStepContent(step) {
    switch (step) {
        case 0:
            return setContent(0);
        case 1:
            return setContent(1);
        case 2:
            return setContent(2);
        default:
            return 'Unknown step';
    }
}

export default function VerticalLinearStepper() {
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
                    <Typography> ✅ Bootcamp successfully completed! </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
          </Button>
                </Paper>
            )}
        </div>
    );
}