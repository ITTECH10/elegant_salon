import React from 'react'
import AppbarLong from '../components/Layout/Appbar/AppbarLong'
import {Grid, Box, Typography, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Map from './../assets/images/map.PNG'

const useStyles = makeStyles(theme => ({
    gridContainer: {
        marginTop: '7rem',
        padding: '0 5rem'
    },
    gridItemOne: {
        background: '#fff',
        borderRadius: '.5rem',
        padding: '1rem'
    },
    gridItemTwo: {
        background: '#fff',
        borderRadius: '.5rem',
        padding: '1rem'
    },
    gridItemThree: {
        borderRadius: '.5rem'
    },
    gridOneTitle: {
        fontWeight: 'bold',
        marginBottom: '.5rem'
    },
    gridContentContainer: {
        display: 'flex',
        padding: '1rem'
    },
    gridContentBox: {
        textAlign: 'left',
        [theme.breakpoints.up('sm')]: {
            textAlign: 'center'
        }
    },
    gridContentFlex: {
        display: 'flex',
        flexDirection: 'column'
    },
    // ŽIRO RAČUNI KOMPONENTA (NAPRAVITI POSEBNO)
    typoRoot: {
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    typoSubTitles: {
        fontWeight: 'bold',
        marginTop: '1rem'
    },
    boxRoot: {
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '.5rem'
    }
}))

const Contact = () => {
    const classes = useStyles()
    return (
        <>
            <AppbarLong />
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item xs={12} md={9}>
                    <Box className={classes.gridItemOne}>
                        <Typography variant="h4" className={classes.gridOneTitle}>
                            Kontaktirajte nas
                        </Typography>
                        <img src={Map} alt="map" style={{height: '400px', width: '100%'}} />
                            <Typography variant="h4" align="center" style={{fontWeight: 'bold'}}>
                                Kontakt Podaci
                            </Typography>
                        <Grid container spacing={2} justify="center" className={classes.gridContentContainer}>
                            <Grid item xs={12} md={6} className={classes.gridContentBox}>
                                <Box className={classes.gridContentFlex}>
                                    <Typography>
                                        Auto Salon KRAMAR d.o.o.
                                    </Typography>
                                    
                                    <Typography>
                                        Hrašljani 5. 88320 Ljubuški, BiH
                                    </Typography>

                                    <Typography>
                                        PDV broj: 272195510002
                                    </Typography>

                                    <Typography>
                                        E-mail: info@askramar.com
                                    </Typography>
                                </Box> 
                            </Grid>

                            <Grid item xs={12} md={6} className={classes.gridContentBox}>
                                <Box className={classes.gridContentFlex}>
                                    <Typography style={{fontWeight: 'bold'}}>
                                        Lager Ljubuški
                                    </Typography>
                                    
                                    <Typography>
                                        Hrašljani 5. 88320 Ljubuški
                                    </Typography>

                                    <Typography>
                                        Tel.: + 387 39 830 000
                                    </Typography>

                                    <Typography>
                                        Fax.: + 387 39 830 001
                                    </Typography>
                                </Box> 
                            </Grid>

                            <Grid item xs={12} md={6} className={classes.gridContentBox}>
                            <Box className={classes.gridContentFlex}>
                                    <Typography style={{fontWeight: 'bold'}}>
                                        Lager Banja Luka
                                    </Typography>
                                    
                                    <Typography>
                                        Marka Lipovca b.b. 78000 Banja Luka
                                    </Typography>

                                    <Typography>
                                        (Tranzitni put Banja Luka - Gradiška)
                                    </Typography>

                                    <Typography>
                                        Tel.: + 387 51 926 000
                                    </Typography>

                                    <Typography>
                                        Mob.: + 387 63 171 000
                                    </Typography>
                                </Box> 
                            </Grid>
                            <Grid item xs={12} md={6} className={classes.gridContentBox}>
                            <Box className={classes.gridContentFlex}>
                                    <Typography style={{fontWeight: 'bold'}}>
                                        Lager Sarajevo
                                    </Typography>
                                    
                                    <Typography>
                                        Osik 2. 71000 Sarajevo - Ilidža
                                    </Typography>

                                    <Typography>
                                        Tel.: + 387 33 274 700
                                    </Typography>

                                    <Typography>
                                        Fax.: + 387 33 274 701
                                    </Typography>
                                </Box> 
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box className={classes.gridItemTwo}>
                        <Typography variant="h4" style={{fontWeight: 'bold'}}>
                            Radno Vrijeme
                        </Typography>
                        <Divider />
                        <Box style={{padding: '1rem'}}>
                            <Typography variant="h6" style={{fontWeight: 'bold'}}>
                                Ponedjeljak - petak
                            </Typography>
                            <Typography>
                                Od 8:30 do 19:00 sati
                            </Typography>
                            <Typography variant="h6" style={{fontWeight: 'bold'}}>
                                Subota
                            </Typography>
                            <Typography>
                                Od 8:30 do 16:30 sati
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid className={classes.gridItemThree} item xs={12} md={9}>
                    <Box className={classes.boxRoot}>
                        <Typography variant="h4" className={classes.typoRoot}>
                            Žiro računi
                        </Typography>
                            <Divider />

                        <Typography variant="h5" className={classes.typoSubTitles}>
                            UniCredit Bank
                        </Typography>
                        <Typography>
                            Žiro račun: 3381602200831537
                        </Typography>
                        <Typography>
                            IBAN: BA393380604817615719
                        </Typography>
                        <Typography>
                            SWIFT: UNCRBA22
                        </Typography>
                            <br/>
                        <Typography variant="h5" className={classes.typoSubTitles}>
                            Moja Banka
                        </Typography>
                        <Typography>
                            Žiro račun: 1375306001113268
                        </Typography>
                        <Typography>
                            IBAN: BA391375306001113268
                        </Typography>
                        <Typography>
                            SWIFT: FMBABA22
                        </Typography>
                            <br/>
                        <Typography variant="h5" className={classes.typoSubTitles}>
                            Raiffeisen Bank
                        </Typography>
                        <Typography>
                            Žiro račun: 1610200034160006
                        </Typography>
                        <Typography>
                            IBAN: BA391611200000596792
                        </Typography>
                        <Typography>
                            SWIFT: RZBABA2S
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact
