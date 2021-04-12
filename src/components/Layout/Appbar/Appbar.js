import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '.5rem 1.5rem',
    transition: 'all .4s ease',
    '&:hover': {
      backgroundColor: '#c62828'
    }
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.title}>
            About
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Team
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
