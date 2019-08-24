import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 45.5051, lng: -122.6750 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjOba9SSlIOMl_9NUCIRV18-GuB-F7ln0'
})(MapContainer)