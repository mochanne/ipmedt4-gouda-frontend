import React, { Component } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import data from '../../../assets/data';
// import QRMarkers from './QRMarkers';
// import RoutingMachine from "./RoutingMachine";
import APIget from './APIget';

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.011643, lng: 4.710545 },
      zoom: 16,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <MapContainer center={currentLocation} zoom={zoom} zoomControl={false}>
        <TileLayer
          url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <APIget /> 
        
        

        
      </MapContainer>
    );
  }
}

export default LeafletMap;
