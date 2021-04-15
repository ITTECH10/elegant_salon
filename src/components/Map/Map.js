import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 44.45285236915773,
            lng: 18.654412078480323
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Auto Salon Elegant'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <p>3 ulica br.89, Živinice 75270</p>
            <p>Živinice || Bosnia and Herzegovina</p>
            <p>+387 61 34 4707</p>
            <a href="https://www.google.com/maps/place/Zenunovi%C4%87+Automobile/@44.451381,18.6523403,17z/data=!3m1!4b1!4m9!1m2!2m1!1sauto+salon+elegant+zivinice!3m5!1s0x0:0xe626ee24894b4998!8m2!3d44.4513822!4d18.6545277!15sChthdXRvIHNhbG9uIGVsZWdhbnQgeml2aW5pY2VaMQoSYXV0byBzYWxvbiBlbGVnYW50IhthdXRvIHNhbG9uIGVsZWdhbnQgeml2aW5pY2WSAQpjYXJfZGVhbGVy">Vidi na google-maps</a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);