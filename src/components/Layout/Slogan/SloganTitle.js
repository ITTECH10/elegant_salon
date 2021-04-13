import React from 'react'
import {Typography, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paperRoot: {
        width: '80%',
        margin: '0 auto',
        textAlign: 'left',
        position: 'relative',
        top: '10rem',
        padding: '1rem'
    },
    typoRoot: {
        fontWeight: 'bold'
    }
}))

const SloganTitle = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.paperRoot} elevation={3}>
            <Typography className={classes.typoRoot} variant="h4">
                Dobro došli na web stranice Auto salona Kramar!
            </Typography>
        </Paper>
    )
}

export default SloganTitle
