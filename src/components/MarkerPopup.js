import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  console.log(props.data[0]);
  const afbeelding = props.data[0];
  const gedicht = props.data[1];
  const info = props.data[2];
  const naam = props.data[3];
  console.log(naam);

  return  (<Popup>
    <img src={afbeelding} className='imgCard'></img>
    <p className='popup-text'>{naam}</p>
    <p className="gedicht-text">{gedicht}</p>
    <p className="info-text">{info}</p>

  </Popup>);
};

export default MarkerPopup;
