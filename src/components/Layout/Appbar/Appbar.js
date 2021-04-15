import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Link} from 'react-router-dom'
 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navRoot: {
    top: '10rem'
  },
  title: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '.5rem 1.5rem',
    transition: 'all .4s ease',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#c62828'
    }
  },
  linkRoot: {
    textDecoration: 'none',
    color: '#fff'
  }
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static" className={classes.navRoot}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.linkRoot}>
              Početna
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/ponuda" className={classes.linkRoot}>
              Ponuda Vozila
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to="/povijest" className={classes.linkRoot}>
              Profil i povijest
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/kontakt" className={classes.linkRoot}>
              Kontakt
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <FacebookIcon />
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <InstagramIcon />
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <YouTubeIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
