import React from 'react'
import AppbarLong from './../components/Layout/Appbar/AppbarLong'
import {Typography, Grid, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Gallery from '../components/Gallery/Gallery'

const useStyles = makeStyles(theme => ({
    container: {},
    titleBox: {
        background: '#fff',
        padding: '1rem',
        margin: '0 0 1rem 1rem',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
    },
    title: {
        fontWeight: 'bold'
    },
    gridContainer: {
        marginTop: '10rem',
        padding: '0 10rem'
    },
    gridItemOne: {},
    gridItemTwo: {},
    galleryBox: {
        background: '#fff'
    },
    contentBox: {
        background: '#fff'
    }
}))

const VehicleSingle = () => {
    const classes = useStyles()
    return (
        <>
            <AppbarLong />
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item xs={12}>
                    <Box className={classes.titleBox}>
                        <Typography className={classes.title} variant="h4">
                            Audi A3 Limuzina 1.6 TDI Sport Selection S-Line -Novi model-
                        </Typography>
                    </Box>
                </Grid>
                <Grid item className={classes.gridItemOne} xs={12} md={6}>
                    <Box className={classes.galleryBox}>
                        <Gallery />
                    </Box>
                </Grid>
                <Grid item className={classes.gridItemTwo} xs={12} md={6}>
                    <Box className={classes.contentBox}>
                        
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default VehicleSingle
