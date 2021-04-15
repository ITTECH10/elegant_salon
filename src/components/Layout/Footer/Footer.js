import React from 'react'
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import FooterImage from './../../../assets/images/footer_1920x100.jpg'

const useStyles = makeStyles(theme => ({
    boxRoot: {
        height: '9rem',
        marginTop: '20rem',
        position: 'relative',
        color: '#fff'
    },
    footerImage: {
        height: '100%',
        [theme.breakpoints.up('xs')]: {
            width: '200%'
        },
        [theme.breakpoints.up('md')]: {
            width: '100%'
        },

    },
    boxContent: {
        position: 'absolute',
        left: '5%',
        bottom: '20%'
    },
    footerText: {
        fontSize: '.9rem',
        padding: '0 .5rem'
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <Box className={classes.boxRoot}>
            <img src={FooterImage} alt="website footer" className={classes.footerImage} />
            <Box className={classes.boxContent}>
                <Typography className={classes.footerText}>
                    Auto Salon Kramar d.o.o Hrašljani 5. 88320 Ljubuški, BiH
                </Typography>
                <Typography className={classes.footerText}>
                    Telefon: 387 39 830 000, Fax: 387 39 830 001, Email: info@askramar.com, Web: www.askramar.com
                </Typography>
                <Typography className={classes.footerText}>
                    © Copyright 2007 - 2021 AS Kramar. All Rights Reserved. This site is designed and powered by GCR production.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
