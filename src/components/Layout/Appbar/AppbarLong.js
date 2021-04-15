import React from 'react'
import InfoDashboard from './../Dashboard/InfoDashboard'
import Appbar from './Appbar'
import Slogan from './../Slogan/Slogan'
import SearchVehicles from './../Search/SearchVehicles'
import SloganTitle from './../Slogan/SloganTitle'

const AppbarLong = () => {
    return (
        <>
            <InfoDashboard />
            <Appbar />
            <Slogan title="Ti Voziš. Ti Biraš." />
            {window.location.pathname === '/ponuda' && <SearchVehicles />}
            {window.location.pathname === '/' && <SloganTitle />}
        </>
    )
}

export default AppbarLong
