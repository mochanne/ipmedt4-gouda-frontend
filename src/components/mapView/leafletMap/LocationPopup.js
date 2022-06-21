import React from 'react';
import {Popup} from 'react-leaflet';

import './LocationPopup.css';

const LocationPopup = () => {

  return  (
    <Popup>
      <section className='locationPopup__content'>

        <p>U bent hier</p>

      </section>

    </Popup>);
};

export default LocationPopup;