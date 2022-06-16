import React from 'react';
import { useLocation } from 'react-router-dom';

import './MapView.css';
import LeafletMap from '../components/mapView/leafletMap/LeafletMap';
import MapMenu from '../components/mapView/MapMenu';
import Popup from '../components/mapView/Popup';


const MapView = () => {
    
        const location = useLocation();
        const route = location.state;

        return (
            <main className='mapView'>
    
                <a href='/' className='mapView__backBtn'>
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                </a>

                <MapMenu route={route} />

                {/* <Popup /> */}
    
                <LeafletMap />
            
            </main>
        );

}

export default MapView;