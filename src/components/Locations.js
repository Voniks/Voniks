import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GoogleMapComp = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={10}
    defaultCenter={{ lat: 39, lng: -77.1 }}
    defaultOptions={{
      scrollwheel: false
    }}
  >
    {props.markers.map((marker, index) => (
      <Marker {...marker} onClick={marker => props.onMarkerClick(marker)} />
    ))}
  </GoogleMap>
));

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      markers: [
        {
          position: {
            lat: 38.9097,
            lng: -77.0433
          },
          key: "Dupont Circle, Washington",
          defaultAnimation: 2
        },
        {
          position: {
            lat: 39.1159,
            lng: -77.1976
          },
          key: "Washingtonian Center in Gaithersburg, Maryland",
          defaultAnimation: 2
        }
      ]
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.handleMapLoad = this.handleMapLoad.bind(this);
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  onMarkerClick(marker) {
    this._mapComponent.panTo(marker.latLng);
  }

  render() {
    return (
      <GoogleMapComp
        containerElement={<div style={{ height: "80vh" }} />}
        mapElement={<div style={{ height: "80vh" }} />}
        onMapLoad={this.handleMapLoad}
        markers={this.state.markers}
        onMarkerClick={this.onMarkerClick}
      />
    );
  }
}

export default Locations;
