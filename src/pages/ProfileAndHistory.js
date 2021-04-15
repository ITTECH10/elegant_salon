import React from 'react'
import AppbarLong from './../components/Layout/Appbar/AppbarLong'
import Image from './../assets/images/elegant-o-nama.jpg'
import {Grid, Typography, Box, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    gridRoot: {
        marginTop: '8rem',
        [theme.breakpoints.up('sm')]: {
            padding: '0 12rem'
        }
    },
    gridItem: {},
    gridItemOne: {
        // border: '2px solid red'
        borderRadius: '.5rem'
    },
    gridOneTypoTitle: {
        fontWeight: 'bold',
        marginBottom: '.5rem'
    },
    gridTwoTypoTitle: {
        fontWeight: '500',
        margin: '.5rem 0 .5rem 1rem'
    },
    gridItemTwo: {
        // border: '2px solid blue',
        backgroundColor: '#fff',
        borderRadius: '.5rem',
        padding: '1rem',
        margin: '8px 0'
    },
    gridItemThree: {
        // border: '2px solid yellow',
        borderRadius: '.5rem',
        marginTop: '1rem',
        backgroundColor: '#fff'
    },
    typoRoot: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        // margin: '.5rem 0 0 1rem'
    },
    boxImage: {},
    imageRoot: {
        width: '100%',
        height: '25rem'
    },
    gridTitleDivider: {
        marginBottom: '1rem'
    },
    typoSubTitles: {
        fontWeight: 'bold',
        marginTop: '1rem'
    },
    typoGridOneTitles: {
        fontWeight: 'bold',
        margin: '1rem 0'
    },
    boxTitles: {
        margin: '1rem 0 1rem 1rem'
    },
    boxRoot: {
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '.5rem',
    }
}))

const ProfileAndHistory = () => {
    const classes = useStyles()
    return (
        <>
            <AppbarLong />
            <Grid container spacing={2} className={classes.gridRoot} justify="flex-end">
                <Grid className={classes.gridItemOne} item xs={12} md={9}>
                    <Box className={classes.boxRoot}>
                        <Typography variant="h4" className={classes.gridOneTypoTitle}>
                            Saznajte sve o auto salonu kramar
                        </Typography>
                        <Box className={classes.boxImage}>
                            <img className={classes.imageRoot} src={Image} alt="about us"/>
                        </Box>
                        <Box className={classes.boxTitles}>
                            <Typography variant="h5" className={classes.typoGridOneTitles}>
                                Profili Kompanije
                            </Typography>
                            <Typography>
                                AS Kramar d.o.o. bavi se uvozom i prodajom rabljenih vozila iz Njemačke. Sva vozila posjeduju certifikat o proizvođaču i servisnu evidenciju. Pri kupovini vozila u Auto salonu Kramar dobivate pismenu garanciju 6 mjeseci na motor i mjenjač, te doživotnu garanciju na porijeklo vozila i kilometre.
                            </Typography>

                            <Typography variant="h5" className={classes.typoGridOneTitles}>
                                Povijest Kompanije
                            </Typography>
                            <Typography>
                                Tvrtka je osnovana 2004. godine i u početku je djelovala na adresi Teskera b.b. u Ljubuškom. U 7. mjesecu 2007. godine preselili smo se na sadašnju adresu Mostarska vrata b.b. Iste godine dobili smo certifikat za sustav upravljanja kvalitetom prema EN ISO 9001:2015 što je dokaz kvalitete naših usluga. AS Kramar je 2009. godine otvorio svoje podružnice u Crnoj Gori (Nikšić), te 2011 godine u Njemačkoj (Nürnberg). U 2013. godini otvorena je podružnica u Banja Luci, a u 2014. godini u Sarajevu.
                                    <br/> <br/>
                                U ponudi Auto salona Kramar je oko 500 vozila, a svaki tjedan nam dolazi pedesetak novih vozila. Dolazak vozila možete pratiti na našoj web stranici u dijelu "Vozila u dolasku". Na našoj stranici također možete pogledati sva vozila koja su trenutno u ponudi kao i sve podatke o njima. Ako odlučite osobno doći u naš salon, naše osoblje će Vam pri Vašoj posjeti biti na usluzi, pružiti Vam sve potrebne informacije i tako pomoći pri odabiru Vašeg vozila.
                            </Typography>

                            <Typography variant="h5" className={classes.typoGridOneTitles}>
                                Politika kvalitete
                            </Typography>
                            <Typography>
                                AS KRAMAR utvrđuje ovu Politiku kvalitete radi osiguranja da će automobili koje isporučuje ispunjavati iskazane i realne zahtjeve korisnika kao i zahtjeve važećih zakona i propisa. Opći cilj AS KRAMAR je da postane i ostane vodeće poduzeće na tržištu u pogledu uvoza i prodaje rabljenih vozila iz EU. Ravnatelj tvrtke AS KRAMAR d.o.o. opredjeljuje se za sljedeću
                                    <br/> <br/>
                                Politiku kvalitete:
                                    <br/> <br/>
                                Usmjerenost na potrebe kupca i zadovoljstvo kupca izvršenim poslom su najvažnije vrijednosti prema kojima AS KRAMAR mjeri i određuje svoju ukupnu uspješnost.
                                Da bismo postizali, održavali i osnaživali te vrijednosti, trajno se obvezujemo:
                                - zapošljavati stručno i ambiciozno osoblje koje će imati mogućnosti i obveze stalno se razvijati i usavršavati
                                - pribavljati najsuvremenije informatičke i komunikacijske resurse te ostalu opremu, infrastrukturu i okruženje za ugodan rad
                                - njegovati i razvijati partnerske odnose s dobavljačima
                                - nuditi kupcima optimalna i cjelovita rješenja
                                - realizirati rješenja koja u cijelosti podržavaju zahtjeve i potrebe naših kupaca
                                - primjenjivati i poboljšavati djelotvornost sustava upravljanja kvalitetom temeljenog na zahtjevima međunarodne norme ISO 9001 i težiti nadilaženju razine tih zahtjeva
                                - postavljati si ambiciozne, mjerljive i ostvarive ciljeve kvalitete.
                                    <br/> <br/>
                                Svaki djelatnik tvrtke mora biti upoznat s politikom kvalitete, shvatiti je i prihvatiti kao trajno načelo u vlastitom djelovanju. Politika kvalitete izdaje se i kao samostalna dokumentirana informacija kojeg potpisuje ravnatelj tvrtke. Ova politika je okvir za uspostavljanje i nadzor nad realizacijom naših ciljeva upravljanja kvalitetom a uspostavljen i primijenjen sustav upravljanja kvalitetom prema zahtjevima normi ISO 9001:2015 jamstvo su postavljenih ciljeva.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid className={classes.gridItemTwo} item xs={12} md={3}>
                    <Box className={classes.boxRoot}>
                        <Typography variant="h4" className={classes.typoRoot} >
                        Certifikati
                        </Typography>
                            <Divider className={classes.gridTitleDivider}/>
                        <Typography>
                            Certifikat ISO 9001:2015. dokazuje da je vaš sustav upravljanja kvalitetom sukladan zahtjevima iz norme i da je usklađen sa propisima. Budući da ga izdaje neovisna certifikacijska kuća, certifikat klijentima daje do znanja da tvrtka ima implementirane nužne interne procese radi ispunjavanja obveza norme.
                                <br/><br/>
                            Međunarodno priznata norma ISO 9001:2015. je općenita. To nije norma nekog određenog proizvoda, već se primjenjuje na sve vrste proizvodnih i uslužnih djelatnosti. Uvela ju je Organizacija za standardizaciju (ISO) sa ciljem uspostave međunarodnih zahtjeva za Sustave upravljanja kvalitetom.
                                <br/> <br/>
                            Glavne točke norme su slijedeće:
                                <br/> <br/>
                                <ul style={{listStyle: 'none'}}>
                                    <li>* Sustav upravljanja kvalitetom</li>
                                    <li>* Odgovornost uprave</li>
                                    <li>* Upravljanje sredstvima</li>
                                    <li>* Realizacija proizvoda</li>
                                    <li>* Mjerenje, analiza i poboljšanja</li>
                                </ul>             
                        </Typography>
                    </Box>
                </Grid>
                
                <Grid className={classes.gridItemThree} item xs={12} md={12}>
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

export default ProfileAndHistory
