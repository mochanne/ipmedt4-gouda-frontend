import MarkerPopup from "../MarkerPopup";
import DefPopup from "./defPopup";

const calculateDistance = (props) =>
{
    let latlong = props.data[6];

    const toRadian = n => (n * Math.PI) / 180
  
      let lat2 = 52.011239
      let lon2 = 4.710288
      // let lat2 = latlong.lat
      // let lon2 = latlong.lng 
      let lat1 = props.data[4]//lattitude1
      let lon1 = props.data[5] //longittude1
  
      //console.log(lat1, lon1+"==="+lat2, lon2)
      
      let R = 6371  // km
      let x1 = lat2 - lat1
      let dLat = toRadian(x1)
      let x2 = lon2 - lon1
      let dLon = toRadian(x2)
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      let d = R * c
      
      //console.log("distance==?",d);
    
      let Popup 

      if(d < 0.02){
        Popup = <MarkerPopup data={[props.data[0],props.data[1],props.data[2],props.data[3]]}/>
      } else{
        Popup = <DefPopup key={props.data[4]} data = {[d,props.data[3]]} />
      };


    return(
        
        [Popup]
        
        
    );
}

export default calculateDistance;

//(lattitude1, longittude1,lattitude2,longittude2)