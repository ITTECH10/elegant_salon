import React from 'react'
import AppbarLong from './../components/Layout/Appbar/AppbarLong'
import {Typography, Grid, Box, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Gallery from '../components/Gallery/Gallery'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PrintIcon from '@material-ui/icons/Print';

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
        [theme.breakpoints.up('md')]: {
            padding: '0 10rem'
        }
    },
    gridItemOne: {},
    gridItemTwo: {},
    gridItemThree: {},
    gridItemFour: {},
    galleryBox: {
        background: '#fff'
    },
    contentBox: {
        background: '#fff',
        padding: '1rem'
    },
    boxDimmed: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#eee',
        padding: '.5rem 1rem',
        borderRadius: '1rem',
        marginBottom: '.3rem'
    },
    boxes: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem',
        [theme.breakpoints.up('xs')]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    boxesBox: {
        display: 'flex',
        alignItems: 'center',
        padding: '.3rem',
        borderRadius: '1.5rem',
        background: '#fff',
        cursor: 'pointer',
        transition: 'all .3s ease',
        '&:hover': {
            background: '#25d366',
            color: '#fff'
        },
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            marginBottom: '1rem'
        },
        [theme.breakpoints.up('sm')]: {
            width: '23%',
            marginBottom: '1rem'
        }
    },
    iconBox: {
        height: '40px',
        width: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#1abd31',
        borderRadius: '50%'
    },
    descriptionBox: {
        background: '#fff',
        padding: '1rem'
    },
    listBox: {
        display: 'flex',
        justifyContent: 'space-between',
        // padding: '0 10rem'
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
                        <Typography className={classes.title} variant="h5">
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
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                CIJENA BEZ PDV-A
                            </Typography>
                            <Typography style={{textDecoration: 'line-through'}} >
                                <span style={{textDecoration: 'line-through', color: 'red', marginRight: '.5rem'}} >32.990,00KM</span>
                                34.990,00KM
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                CIJENA DO REGISTRACIJE
                            </Typography>
                            <Typography style={{textDecoration: 'line-through'}} >
                                <span style={{textDecoration: 'line-through', color: 'red', marginRight: '.5rem'}} >36.990,00KM</span>
                                38.990,00KM
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                GODINA PROIZVODNJE
                            </Typography>
                            <Typography>
                                2017
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                PRE??ENI KILOMETRI
                            </Typography>
                            <Typography>
                                144 534
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                ??IFRA VOZILA
                            </Typography>
                            <Typography>
                                S008210066
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                LOKACIJA
                            </Typography>
                            <Typography>
                                LJUBU??KI
                            </Typography>
                        </Box>
                            <br />
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                VRSTA MOTORA
                            </Typography>
                            <Typography>
                                DIESEL
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                VRSTA KAROSERIJE
                            </Typography>
                            <Typography>
                                CROSSOVER
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                VRSTA MIJENJA??A
                            </Typography>
                            <Typography>
                                RU??NI -6 BRZINA
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                BOJA
                            </Typography>
                            <Typography>
                                CRNA METALIK
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                BROJ VRATA
                            </Typography>
                            <Typography>
                                4/5
                            </Typography>
                        </Box>
                        <Box className={classes.boxDimmed}>
                            <Typography variant="caption">
                                SNAGA MOTORA
                            </Typography>
                            <Typography>
                                110KW/150KS
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} className={classes.gridItemThree}>
                    <Box className={classes.boxes} style={{background: '#ebebeb'}} >
                        <Paper elevation={3} className={classes.boxesBox}>
                            <Box className={classes.iconBox}>
                                <EmailIcon style={{color: '#fff'}} />
                            </Box>
                            <Typography style={{marginLeft: '.5rem'}} >
                                Po??alji upit
                            </Typography>
                        </Paper>

                        <Paper elevation={3} className={classes.boxesBox}>
                            <Box className={classes.iconBox}>
                                <PhoneIcon style={{color: '#fff'}} />
                            </Box>
                            <Typography style={{marginLeft: '.5rem'}} >
                                +387 39 830 000
                            </Typography>
                        </Paper>

                        <Paper elevation={3} className={classes.boxesBox}>
                            <Box className={classes.iconBox}>
                                <WhatsAppIcon style={{color: '#fff'}} />
                            </Box>
                            <Typography style={{marginLeft: '.5rem'}} >
                                +387 39 850 000
                            </Typography>
                        </Paper>

                        <Paper elevation={3} className={classes.boxesBox}>
                            <Box className={classes.iconBox}>
                                <PrintIcon style={{color: '#fff'}} />
                            </Box>
                            <Typography style={{marginLeft: '.5rem'}} >
                                Ispis vozila
                            </Typography>
                        </Paper>
                    </Box>
                </Grid>

                <Grid item xs={12} className={classes.gridItemFour}>
                    <Paper elevation={3} className={classes.descriptionBox}>
                        <Typography variant="h5" style={{fontWeight: 'bold', margin: '1rem 0'}}>
                            Opis vozila
                        </Typography>
                        <Typography>
                            Boja: Crna metalic, klimatronic, daljinsko zaklju??avanje, ESP, ASR, ABS, EBFD, EBA, 8x airbag's, servo, 4x el. podiza??i stakala, audio sustav, USB priklju??ak, Mirror Link, bluetooth priklju??ak za telefon, WiFi, senzor za ki??u, indikator smanjenog pritiska u pneumaticima, automatski zasjenjiv unutra??nji retrovizor, Elektri??na ru??na ko??nica s opcijom hill assist, maglenke, naslonja?? za ruku s pretincem, ISOFIX u??vr????iva?? za dje??je sjedalo, sklopivo stra??nje sjedalo, dvodjelno 60/40, stra??nji naslon za ruku, ukrasni detalji unutra??njosti od aluminija, krom paket, multifunkcijske tipke na volanu, putno ra??unalo, tempomat i ograni??ava?? brzine, 6-brzina, alu-felge 17", el. preklapanje retrovizora, zatamnjena stra??nja stakla, krom umetci na prednjem i stra??njem braniku, 2xParking senzori, Kamera za parkiranje, sportski ko??ni upravlja??, sportska sjedi??ta, LED dnevna svjetla, ECO Start & Stop, Lane Assist - sustav upozorenja pri napu??tanju vozne trake, Sustav prepoznavanja prometnih znakova, i-Cockpit s digitalnom instrument plo??om na 12,3??? zaslonu visoke razlu??ivosti koji je mogu??e konfigurirati i personalizirati, Navigacija, 8" zaslon osjetljiv na dodir, Allure Sport, Novi model,.....
                        </Typography>
                        <Typography variant="h5" style={{fontWeight: 'bold', margin: '1rem 0'}}>
                            Oprema
                        </Typography>
                        <Box className={classes.listBox}>
                            <ul className="custom__marker">
                                <li>ABS</li>
                                <li>Centralno klju??anje</li>
                                <li>Zra??ni jastuci</li>
                                <li>Bluetooth priklju??ak</li>
                                <li>Chrom paket</li>
                                <li>Putno ra??unalo</li>
                                <li>El. preklopivi retrovizori</li>
                                <li>Navigacija</li>
                                <li>Virtual Cockpit</li>
                                <li>El. podiza??i naprijed i nazad</li>
                                <li>Unutra??njost: ??tof</li>
                            </ul>
                            <ul className="custom__marker">
                                <li>Alarm</li>
                                <li>Daljinsko klju??anje</li>
                                <li>ASR</li>
                                <li>Priprema za mobilni ure??aj</li>
                                <li>Maglenke</li>
                                <li>Tempomat</li>
                                <li>Senzor za parkiranje sprijeda</li>
                                <li>LED svjetla</li>
                                <li>Paket opreme: Allure Sport</li>
                                <li>Aluminijske felge 17"</li>
                            </ul>
                            <ul className="custom__marker">
                                <li>Servo</li>
                                <li>Naslon za glavu nazad</li>
                                <li>ESP</li>
                                <li>Naslon za ruku</li>
                                <li>Multifunkcionalne tipke na volanu</li>
                                <li>Elektri??no pode??avanje ogledala</li>
                                <li>Senzor za parkiranje otraga</li>
                                <li>Kamera za parkiranje</li>
                                <li>Automatska klima</li>
                                <li>Radio/CD/MP3</li>
                            </ul>
                        </Box>
                        <Typography align="center" style={{color: '#ccc'}} >
                            Unato?? pa??ljivom unosu podataka zadr??avamo pravo na pogre??ke u tehni??kom opisu i tekstualnom sadr??aju opreme vozila.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default VehicleSingle
