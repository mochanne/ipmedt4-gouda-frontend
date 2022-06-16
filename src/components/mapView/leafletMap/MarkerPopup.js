import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { name } = props.data;
  const {description} = props.data;
  const {link} = props.data;

  return  (<Popup>
    <div className='popup-text'>{name}</div>
    <div className="popup-description">{description}</div>
    <a className="popup-link" href={link} target="_blank">{link}</a>
  </Popup>);
};

export default MarkerPopup;
