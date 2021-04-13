import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';

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
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="fixed" className={classes.navRoot}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Početna
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Ponuda Vozila
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Profil i Povijest
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Kontakt
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <FacebookIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
