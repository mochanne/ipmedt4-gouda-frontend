import L from 'leaflet';

export const Icon = L.icon({
  iconUrl: require('../../../assets/marker.png'), 
  iconRetinaUrl: require('../../../assets/marker.png'),  
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,  
  shadowAnchor: null,
  iconSize: [26, 35],
  className: 'icon'
});

export const LocationIcon = L.icon({
  iconUrl: require('../../../assets/marker-location.png'), 
  iconRetinaUrl: require('../../../assets/marker-location.png'),  
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,  
  shadowAnchor: null,
  iconSize: [26, 26],
  className: 'icon'
});