
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TitleIcon from '@material-ui/icons/Title';
import GitHubIcon from '@material-ui/icons/GitHub';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LanguageIcon from '@material-ui/icons/Language';
import teal from '@material-ui/core/colors/teal';


import clsx from 'clsx';

import HorizontalNonLinearStepper from '../stepper/Stepper.component';
import { withRouter, Link } from 'react-router-dom';




const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: 0,
    padding: 0
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
    backgroundColor: "#484848",
    color: '#A8A8A8',
    cursor: 'pointer'

  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 26,
   
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor:"rgb(51,51,51)",
    color: '#A8A8A8'
   

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "rgb(51,51,51)",
    color: '#A8A8A8!important'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: "rgb(51,51,51)",
    color: '#A8A8A8'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  completed: {
    display: 'inline-block',
  },
  icon: {
    color: '#A8A8A8'
  }

}));



const ResponsiveDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);

  };


  const handleDrawerClose = () => {
    setOpen(false);
  };

  const color = teal[700];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color={color}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           <a href="https://www.linkedin.com/in/maria-marinescu/" target="_blank" rel="noopener norefferer" className="rria"> Maria Marinescu </a>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem>
            <ListItemIcon> <div className={classes.icon}><TitleIcon clasName="icon" /></div> </ListItemIcon>
            <ListItemText primary={"Quick links"} />
          </ListItem>

          <Divider />

          <ListItem button>
            <ListItemIcon><div className={classes.icon}> <LanguageIcon clasName="icon" /></div> </ListItemIcon>
            <a href="https://alexandraciausu-a6df7.firebaseapp.com/" target="_blank" rel="noopener norefferer"> <ListItemText primary={"Make-up Artist Portfolio"} /></a>
          </ListItem>

          <Divider />

          <ListItem button >
            <ListItemIcon> <div className={classes.icon}><LanguageIcon /></div> </ListItemIcon>
            <a href="https://wildcodeschool.github.io/bucharest-project3-interactive-platform/#/" target="_blank" rel="noopener norefferer"><ListItemText primary={"Techir Interactive"} /></a>
          </ListItem>

          <Divider />



          <ListItem button >
            <ListItemIcon> <div className={classes.icon}><LanguageIcon /></div> </ListItemIcon>
            <a href="http://rriamarria.github.io/real_time_iss_tracker" target="_blank" rel="noopener norefferer"> <ListItemText primary={"ISS tracker"} /></a>
          </ListItem>

          <Divider />

          <ListItem button >
            <ListItemIcon> <div className={classes.icon}><LanguageIcon /></div> </ListItemIcon>
            <a href="https://rriamarria.github.io/walking_in_bucharest/" target="_blank" rel="noopener norefferer"> <ListItemText primary={"Walking tour of Bucharest"} /></a>
          </ListItem>

          <Divider />

     
          
          <ListItem button >
            <ListItemIcon> <div className={classes.icon}><GitHubIcon /></div> </ListItemIcon>
           <a href="https://github.com/mariamarinescu/learning_how_to_code" target="_blank" rel="noopener norefferer"> <ListItemText primary={"this.Repository"} /></a>
          </ListItem>

          <Divider />
          <Divider/>
          <ListItem button >
            <ListItemIcon> <div className={classes.icon}><GitHubIcon /></div> </ListItemIcon>
            <a href="https://github.com/mariamarinescu?tab=overview&from=2019-12-01&to=2019-12-31" target="_blank" rel="noopener norefferer">   <ListItemText primary={"Old GitHub acc."} /> </a>
          </ListItem>
          
        <Divider/>
          <Divider/>
          <ListItem button >
            <ListItemIcon><div className={classes.icon}> <GitHubIcon /></div> </ListItemIcon>
            <a href="https://github.com/rriamarria" target="_blank" rel="noopener norefferer">   <ListItemText primary={"New GitHub acc."} /> </a>
          </ListItem>
        <Divider/>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
      <HorizontalNonLinearStepper />
    </div>
  );

}





export default withRouter(ResponsiveDrawer);




