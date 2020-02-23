import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './LandingCard.component.css';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            top: -22,
            width:'60%',
            height: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            top: 22,
            width: '50%',
            height: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            top: 22,
            width: '44%',
            height: 'auto',
        },
        position: 'relative',
        display: 'block',
        margin: '0 auto',
        zIndex: 10
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        // fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
}));

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined" id="card">
            <CardContent>
                <div id="typewriter">
                    <h1>Hi! I'm Maria.</h1>
                </div>
                <div id="typewriter2">
                    <h1>This is my journey</h1>
                </div>
                <div id="typewriter3">
                    <h1>in programming</h1>
                </div>
                <div id="typewriter4">
                    <h1>and a bit of myself.</h1>
                </div>
                <div id="typewriter5">
                    <h1>I'll guide you through it.</h1>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" id="type3" ><Link className="effect1"to="/about">Begin<span className="bg"></span></Link></Button>
            </CardActions>
        </Card>
    );
}