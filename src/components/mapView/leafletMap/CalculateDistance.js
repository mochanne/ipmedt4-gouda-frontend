import ActivePopup from "./ActivePopup";
import NonActivePopup from "./NonActivePopup";

//met deze formule berekendt die hemelsbreed hoever je van het punt af bent in km

const calculateDistance = (props) =>
{
    let latlong = props.data[6];

    const toRadian = n => (n * Math.PI) / 180
  
      let lat2 = latlong.lat
       let lon2 = latlong.lng 
      let lat1 = props.data[4]
      let lon1 = props.data[5]
      
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
    
      let Popup 

      //hiermee zorgt die dat de markers de juiste popup geven als die dichtbij genoeg zijn

      if(d < 0.02){
        Popup = <ActivePopup data={[props.data[0],props.data[1],props.data[2],props.data[3]]}/>
      } else{
        Popup = <NonActivePopup key={props.data[4]} data={[d,props.data[3]]} />
      };


    return(
        
        [Popup]
        
        
    );
}

export default calculateDistance;