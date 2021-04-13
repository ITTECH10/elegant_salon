import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Logo from './../../../assets/images/logo.png'

const InfoDashboard = () => {
    return (
        <section className="info">
            <div className="info__left">
                <div className="info__left-icon-box">
                    <PhoneIcon className="info__left-icon"/>
                </div>
                <div className="info__left-text">
                    <h4 className="info__left-title" >KONTAKTIRAJTE NAS</h4>
                    <p className="info__left-p-first">Tel: + 387 39 830 000</p>
                    <p className="info__left-p-second">Viber: + 387 63 885 000</p>
                </div>
                <div className="info__left-icon-box">
                    <QueryBuilderIcon className="info__left-icon"/>
                </div>
                <div className="info__left-text">
                    <h4 className="info__left-title" >RADNO VRIJEME</h4>
                    <p className="info__left-p-first">Pon - Pet 08:30 - 19:00 sati</p>
                    <p className="info__left-p-second">Sub 08:30 - 16:30 sati</p>
                </div>
                <div className="info__left-icon-box">
                    <LocationOnIcon className="info__left-icon"/>
                </div>
                <div className="info__left-text">
                    <h4 className="info__left-title" >ADRESA</h4>
                    <p className="info__left-p-first">Hrašljani 5.</p>
                    <p className="info__left-p-second">88320 Ljubuški, BiH</p>
                </div>
            </div>
            <div className="info__right">
                <img src={Logo} className="info__right-logo" alt="website logo"/>
            </div>
        </section>
    )
}

export default InfoDashboard
