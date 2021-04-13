import React from 'react'
import CommuteIcon from '@material-ui/icons/Commute';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const CounterDashboard = () => {
    return (
        <section className="counter">
            <div className="counter__container">
                <div className="counter__circle">
                    <div className="counter__icon-box">
                        <CommuteIcon className="counter__icon" />
                    </div>
                </div>
                <div className="counter__text">
                    <h1 className="counter__count counter__count--1">&nbsp;</h1>
                    <p className="counter__sub-text">PRODANIH VOZILA</p>
                </div>
            </div>
            <div className="counter__container">
                <div className="counter__circle">
                    <div className="counter__icon-box">
                        <DriveEtaIcon className="counter__icon" />
                    </div>
                </div>
                <div className="counter__text">
                    <h1 className="counter__count counter__count--2">&nbsp;</h1>
                    <p className="counter__sub-text">VOZILA U PONUDI</p>
                </div>
            </div>
            <div className="counter__container">
                <div className="counter__circle">
                    <div className="counter__icon-box">
                        <ApartmentIcon className="counter__icon" />
                    </div>
                </div>
                <div className="counter__text">
                    <h1 className="counter__count counter__count--3">&nbsp;</h1>
                    <p className="counter__sub-text">m2 IZLOŽENOG PROSTORA</p>
                </div>
            </div>
            <div className="counter__container">
                <div className="counter__circle">
                    <div className="counter__icon-box">
                        <EmojiPeopleIcon className="counter__icon" />
                    </div>
                </div>
                <div className="counter__text">
                    <h1 className="counter__count counter__count--4">&nbsp;</h1>
                    <p className="counter__sub-text">DJELATNIKA STOJI VAM NA USLUZI</p>
                </div>
            </div>
        </section>
    )
}

export default CounterDashboard
