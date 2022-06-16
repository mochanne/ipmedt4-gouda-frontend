import L from "leaflet";
import {Icon} from './Icon';
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
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(52.011312, 4.702331),
      L.latLng(52.011065, 4.705194),
      L.latLng(52.010103, 4.706661),
      /*L.latLng(52.01021, 4.706901),
      L.latLng(52.01117, 4.710124),
      L.latLng(52.011461, 4.710424),
      L.latLng(52.010589, 4.710339),
      L.latLng(52.011078, 4.71036),
      L.latLng(52.009995, 4.709641),
      L.latLng(52.006989, 4.712668),
      L.latLng(52.006554, 4.712086),
      L.latLng(52.008192, 4.706342),
      L.latLng(52.008317, 4.705787),
      L.latLng(52.011312, 4.702331)*/
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
    draggableWaypoints: true,
    fitSelectedRoutes: false,
    showAlternatives: false,
    
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;