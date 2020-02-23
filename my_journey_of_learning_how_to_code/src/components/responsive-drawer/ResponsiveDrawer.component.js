
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
import LastPageIcon from '@material-ui/icons/LastPage';
import TitleIcon from '@material-ui/icons/Title';
import GitHubIcon from '@material-ui/icons/GitHub';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LanguageIcon from '@material-ui/icons/Language';
import clsx from 'clsx';
import HorizontalNonLinearStepper from '../stepper/Stepper.component';
import teal from '@material-ui/core/colors/teal';
import { Switch, Route, withRouter, Link } from 'react-router-dom';




const drawerWidth = 340;

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
    backgroundColor: "rgb(1,2,32)",
    color: 'white'

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
    marginRight: 36,
   
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor:"rgb(13,73,101)",
    color: 'rgb(1,2,32)'
   

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "rgb(13,73,101)",
    color: 'white'
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
    backgroundColor: "rgb(13,73,101)",
    color: 'white'
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
    console.log(props.before)

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
          {/* <IconButton onClick={handleDrawerOpen}>
            {theme.direction !== 'rtl' ? <ChevronRightIcon /> : <div></div>}
          </IconButton> */}
          <Typography variant="h6" noWrap>
            Maria F. Marinescu - My Journey
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
            <ListItemIcon> <TitleIcon /> </ListItemIcon>
            <ListItemText primary={"Quick links"} />
          </ListItem>

          <Divider />

          <ListItem button>
            <ListItemIcon> <LanguageIcon /> </ListItemIcon>
            <a href="https://alexandraciausu-a6df7.firebaseapp.com/" target="_blank"> <ListItemText primary={"Make-up Artist Portfolio"} /></a>
          </ListItem>

          <Divider />

          <ListItem button >
            <ListItemIcon> <LanguageIcon /> </ListItemIcon>
            <a href="https://wildcodeschool.github.io/bucharest-project3-interactive-platform/#/" target="_blank" rel="noopener norefferer"><ListItemText primary={"Techir - 3rd team project (client)"} /></a>
          </ListItem>

          <Divider />



          <ListItem button >
            <ListItemIcon> <LanguageIcon /> </ListItemIcon>
            <a href="http://rriamarria.github.io/real_time_iss_tracker" target="_blank" rel="noopener norefferer"> <ListItemText primary={"ISS tracker"} /></a>
          </ListItem>

          <Divider />

          <ListItem button >
            <ListItemIcon> <LanguageIcon /> </ListItemIcon>
            <a href="https://rriamarria.github.io/walking_in_bucharest/" target="_blank" rel="noopener norefferer"> <ListItemText primary={"Walking tour of Bucharest"} /></a>
          </ListItem>

          <Divider />

     
          
          <ListItem button >
            <ListItemIcon> <GitHubIcon /> </ListItemIcon>
           <a href="https://github.com/mariamarinescu/portfolio/tree/feature/frontend"> <ListItemText primary={"This website's GitHub Repo"} /></a>
          </ListItem>

          <Divider />
          <Divider/>
          <ListItem button >
            <ListItemIcon> <GitHubIcon /> </ListItemIcon>
            <a href="https://github.com/mariamarinescu" target="_blank" rel="noopener norefferer">   <ListItemText primary={"Old GitHub acc."} /> </a>
          </ListItem>
          
        <Divider/>
          <Divider/>
          <ListItem button >
            <ListItemIcon> <GitHubIcon /> </ListItemIcon>
            <a href="https://github.com/rriamarria" target="_blank" rel="noopener norefferer">   <ListItemText primary={"New GitHub acc."} /> </a>
          </ListItem>
          
        <Divider/>
        
          {/* <ListItem button>
            <ListItemIcon> <Link to="/before"><LastPageIcon /> </Link> </ListItemIcon>
            <a href="/before" rel="noopener norefferer">
              <ListItemText primary={"About me - before programming"} />
            </a>
          </ListItem> */}
       

          {/* <Divider /> */}
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




