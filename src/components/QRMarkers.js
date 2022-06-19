import React, { Fragment } from 'react';
import {Marker} from 'react-leaflet';
import {Icon} from './Icon';
import MarkerPopup from './MarkerPopup';

const QRMarkers = (props) => {
  const { QRMarkers } = props;

  const markers = QRMarkers.map((QRMarkers, index) => (
    <Marker 
      key={index} 
      position={QRMarkers.geometry} 
      icon={Icon}
    >
      <MarkerPopup data={QRMarkers}/>
    </Marker>
  ));
  return <Fragment>{markers}</Fragment>
};
export default QRMarkers;