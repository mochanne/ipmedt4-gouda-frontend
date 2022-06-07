import React, { Component } from 'react';
import { Map, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import QRMarkers from './QRMarkers';
import RoutineMachine from "./RoutingMachine";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.011643, lng: 4.710545 },
      zoom: 18,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <RoutineMachine />

        <QRMarkers QRMarkers={data.QRMarkers}/>
      </MapContainer>
    );
  }
}

export default MapView;