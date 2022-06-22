import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "lrm-graphhopper"

import icon from '../../../assets/marker-empty.png';
import iconShadow from '../../../assets/marker-empty.png' //'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const createRoutineMachineLayer = (props) => {
  const array =(props.QRMarkers);
  const arraylength = (array.length);

  var wps = [];

  //stopt de waypoints in een array
  for (var i = 0; i < arraylength; i++) {
    let inwps = (L.latLng(props.QRMarkers[i].latitude, props.QRMarkers[i].longitude));
    wps.push(inwps);
}

//maakt de route rond
wps.push(L.latLng(props.QRMarkers[0].latitude, props.QRMarkers[0].longitude))

//zorgt dat de waypoints zichtbaar zijn
  const instance = L.Routing.control({
    waypoints: wps,
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