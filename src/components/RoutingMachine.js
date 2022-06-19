import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "lrm-graphhopper"

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const createRoutineMachineLayer = (props) => {
  console.log(props);
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.QRMarkers[0].geometry[0], props.QRMarkers[0].geometry[1]),
      L.latLng(props.QRMarkers[1].geometry[0], props.QRMarkers[1].geometry[1]),
      L.latLng(props.QRMarkers[2].geometry[0], props.QRMarkers[2].geometry[1]),
      L.latLng(props.QRMarkers[3].geometry[0], props.QRMarkers[3].geometry[1]),
      L.latLng(props.QRMarkers[4].geometry[0], props.QRMarkers[4].geometry[1]),
      L.latLng(props.QRMarkers[5].geometry[0], props.QRMarkers[5].geometry[1]),
      L.latLng(props.QRMarkers[6].geometry[0], props.QRMarkers[6].geometry[1]),
      L.latLng(props.QRMarkers[7].geometry[0], props.QRMarkers[7].geometry[1]),
      L.latLng(props.QRMarkers[8].geometry[0], props.QRMarkers[8].geometry[1]),
      L.latLng(props.QRMarkers[9].geometry[0], props.QRMarkers[9].geometry[1]),
      L.latLng(props.QRMarkers[10].geometry[0], props.QRMarkers[10].geometry[1]),
      L.latLng(props.QRMarkers[11].geometry[0], props.QRMarkers[11].geometry[1]),
      L.latLng(props.QRMarkers[12].geometry[0], props.QRMarkers[12].geometry[1]),
      L.latLng(props.QRMarkers[0].geometry[0], props.QRMarkers[0].geometry[1])/**/
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    router: new L.Routing.graphHopper('866aff00-bd42-435e-9e17-aca9086c4095', {
      urlParameters: {
        vehicle: "foot"
      }
    }),
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: false,
    showAlternatives: false
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;