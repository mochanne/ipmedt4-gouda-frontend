import React, { Component } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import QRMarkers from './QRMarkers';
import RoutingMachine from "./RoutingMachine";
import APIget from './APIget';

class Map extends Component {
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
          url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //"http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg" //"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png" //"https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png" //"http://{s}.google.com/vt/lyrs=mx={x}y={y}z={z}"  //"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position='topright'/>

        <RoutingMachine />

        <APIget />

        <QRMarkers QRMarkers={data.QRMarkers}/>
      </MapContainer>
    );
  }
}

export default Map;