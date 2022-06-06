import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import { Icon } from "leaflet";
//import * as parkData from "./data/skateboard-parks.json";

function App() {
  return (
    <MapContainer center={[52.011643, 4.710545]} zoom={18}scrollWheelZoom={true}>
      <TileLayer
    url= "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // "https://{s}tile.thunderforest.com/transport/{z}/{x}/{y}.png" "https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png" //"http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[52.011643, 4.710545]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </MapContainer>
  );
}

export default App;
