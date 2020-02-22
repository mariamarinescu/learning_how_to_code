import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './LandingCard.component.scss';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            top: 222
        },
        [theme.breakpoints.up('md')]: {
            top: 222
        },
        [theme.breakpoints.up('lg')]: {
            top: 222
        },
        minWidth: 275,
        position: 'relative',
        width: 200,
        height: 200,
        margin: '0 auto',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
}));

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div class="typewriter">
                    <h1>Hi! I'm Maria.</h1>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}