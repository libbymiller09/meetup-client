import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  marginBottom: '5rem',
  marginTop: '5rem',
  marginLeft: '5rem',
  marginRight: '5rem',
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meetups: [{lat: 45.50, lng: -122.67},
                {latitude: 45.51, longitude: -122.66},
                {latitude: 45.49, longitude: -122.65}]
    }
  }
  displayMarkers = () => {
    return this.state.meetups.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      onClick={() => console.log('You clicked me!')} />
    })
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 45.5051, lng: -122.6750 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjOba9SSlIOMl_9NUCIRV18-GuB-F7ln0'
})(MapContainer)