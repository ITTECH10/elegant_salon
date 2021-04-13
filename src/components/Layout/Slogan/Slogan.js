import React from 'react'
import {Typography, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    boxRoot: {
        height: '3.5rem',
        position: 'relative',
        top: '6rem',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#c62828',
        color: '#fff',
        width: '80%',
        borderRadius: '3rem'
    },
    typoRoot: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        letterSpacing: '.1em'
    }
}))

const Slogan = ({title}) => {
    const classes = useStyles()
    return (
        <Box className={classes.boxRoot}>
            <Typography variant="h2" className={classes.typoRoot}>
                {title}
            </Typography>
        </Box>
    )
}

export default Slogan
