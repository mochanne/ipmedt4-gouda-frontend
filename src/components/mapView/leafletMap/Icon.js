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