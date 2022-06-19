import React, { Component } from 'react';
import { Map, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import QRMarkers from './QRMarkers';
import RoutingMachine from "./RoutingMachine";
import APIget from './APIget';
import Geo from './Geo';
import axios from 'axios';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.011643, lng: 4.710545 },
      zoom: 16,
    }
  }

  APIdata = {infopoints: {}};

  onLoad = () =>{
    const BASE_URL = "http://lillibot.co.uk:8080/api/routeinfo/2"
    axios.get(BASE_URL).then(res => {
      this.setState({
        infopoints:res.APIdata.infopoints
      })
    })
    console.log(data);
  }

  render() {
    const { currentLocation, zoom } = this.state;
    this.onLoad();
    console.log(this.APIdata.infopoints);

    return (
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //"http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg" //"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png" //"https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png" //"http://{s}.google.com/vt/lyrs=mx={x}y={y}z={z}"  //"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <APIget getData /> 
        
        <RoutingMachine QRMarkers={data.QRMarkers} />

        <Geo />

        <QRMarkers QRMarkers={data.QRMarkers}/>
      </MapContainer>
    );
  }
}

export default MapView;

//