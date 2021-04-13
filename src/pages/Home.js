import React from 'react'
import InfoDashboard from './../components/Layout/Dashboard/InfoDashboard'
import CounterDashboard from './../components/Layout/Dashboard/CounterDashboard'
import Appbar from './../components/Layout/Appbar/Appbar'
import Slogan from './../components/Layout/Slogan/Slogan'
import SloganTitle from './../components/Layout/Slogan/SloganTitle'
import SearchVehicles from './../components/Layout/Search/SearchVehicles'

const Home = () => {
    return (
      <>
        <InfoDashboard />
        <Appbar />
        <Slogan title="Ti Voziš. Ti Biraš." />
        <SearchVehicles />
        <SloganTitle />
        <CounterDashboard />
      </>
    )
}

export default Home
