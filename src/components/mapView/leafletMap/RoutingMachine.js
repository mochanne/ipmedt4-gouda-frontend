import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "lrm-graphhopper"

import icon from '../../../assets/marker.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const createRoutineMachineLayer = (props) => {
  //console.log(props);
  //console.log(props.QRMarkers[0].latitude)
  //console.log(props.QRMarkers[0].longitude)
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.QRMarkers[0].latitude, props.QRMarkers[0].longitude),
      L.latLng(props.QRMarkers[1].latitude, props.QRMarkers[1].longitude),
      L.latLng(props.QRMarkers[2].latitude, props.QRMarkers[2].longitude),
      L.latLng(props.QRMarkers[3].latitude, props.QRMarkers[3].longitude),
      L.latLng(props.QRMarkers[4].latitude, props.QRMarkers[4].longitude),
      L.latLng(props.QRMarkers[5].latitude, props.QRMarkers[5].longitude),
      L.latLng(props.QRMarkers[6].latitude, props.QRMarkers[6].longitude),
      L.latLng(props.QRMarkers[7].latitude, props.QRMarkers[7].longitude),
      L.latLng(props.QRMarkers[8].latitude, props.QRMarkers[8].longitude),
      L.latLng(props.QRMarkers[9].latitude, props.QRMarkers[9].longitude),
      L.latLng(props.QRMarkers[10].latitude, props.QRMarkers[10].longitude),
      L.latLng(props.QRMarkers[11].latitude, props.QRMarkers[11].longitude),
      L.latLng(props.QRMarkers[12].latitude, props.QRMarkers[12].longitude),
      L.latLng(props.QRMarkers[0].latitude, props.QRMarkers[0].longitude)/**/
    ],
    lineOptions: {
      styles: [{ color: "#347656", weight: 4 }]
    },
    router: new L.Routing.graphHopper('866aff00-bd42-435e-9e17-aca9086c4095', {
      urlParameters: {
        vehicle: "foot"
      }
    }),
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
    
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;