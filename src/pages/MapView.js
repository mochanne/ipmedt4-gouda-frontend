import React from 'react';

import './MapView.css';
import LeafletMap from '../components/mapView/leafletMap/LeafletMap';
import MapMenu from '../components/mapView/MapMenu';

class MapView extends React.Component {
    render() {

        const routeList = [
            {
                id: 0,
                name: 'West 3',
                distance: '5km',
                totalPoints: 15,
                completedPoints: 12,
                imgUrl: 'img/west3.jpg'
            },
            {
                id: 1,
                name: 'Noord 1',
                distance: '3km',
                totalPoints: 10,
                completedPoints: 0,
                imgUrl: 'img/noord1.jpg'
            },
        ];

        return (
            <main className='mapView'>
    
                <a href='/' className='mapView__backBtn'>
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                </a>

                <MapMenu route={routeList[0]} />
    
                <LeafletMap />
            
            </main>
        );

    }
}

export default MapView;