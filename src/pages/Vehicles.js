import React from 'react'
import AppbarLong from '../components/Layout/Appbar/AppbarLong'
import {Grid} from '@material-ui/core'
import Vehicle from './../components/Vehicles/Vehicle'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    gridRoot: {
        position: 'relative',
        top: '10rem',
        padding: '0 1rem'
    }
}))

const vehicles = [
    {
        name: 'Mercedes',
        price: '10.000KM',
        priceWithTax: '12.000KM',
        year: 2010,
        kilometers: 145.060
    },
    {
        name: 'BMW',
        price: '15.000KM',
        priceWithTax: '17.000KM',
        year: 2008,
        kilometers: 200.000
    },
    {
        name: 'Audi',
        price: '30.000KM',
        priceWithTax: '35.000KM',
        year: 2015,
        kilometers: 90.000
    },
    {
        name: 'Peugeot',
        price: '80.000KM',
        priceWithTax: '100.000KM',
        year: 2016,
        kilometers: 30.000
    },
    {
        name: 'Polo',
        price: '10.000KM',
        priceWithTax: '12.000KM',
        year: 2014,
        kilometers: 130.000
    },
    {
        name: 'Golf',
        price: '16.000KM',
        priceWithTax: '19.000KM',
        year: 2010,
        kilometers: 180.000
    },
];

const content = vehicles.map((el, i) => <Vehicle key={i} vehicle={el} />)

const Vehicles = () => {
    const classes = useStyles()
    return (
        <>
            <AppbarLong />
            <Grid container spacing={1} className={classes.gridRoot}>
                {content}
            </Grid>
        </>
    )
}

export default Vehicles
