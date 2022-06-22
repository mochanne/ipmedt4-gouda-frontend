import { useState, useEffect} from "react";
import RoutingMachine from "./RoutingMachine";
import Geo from "./Geo";

import axios from "axios";

export default function APIget(){
    const [data, setData] = useState(null);
    
    // haalt de API op
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get(
            "http://lillibot.co.uk:8080/api/routeinfo/2"
          );
          setData(response.data);
        } finally {
          
        }
      };
      getData();
    }, []);

    // zorgt dat als er data van de API komt dit weergegeven wordt door de juiste componenten
    let infopoints;
    let QRpoints;

    if (data !== null){
      infopoints = <RoutingMachine QRMarkers={data.infopoints} />
    }

    if (data !== null){
      QRpoints = <Geo QRMarkers={data.infopoints}/>
    }

    return(
      <article>
        {infopoints}
        {QRpoints}
      </article>
    )


    
}

/*function APIget() {
async function fecthData(){
    const response = await fetch("http://192.168.43.66:8000/api/routeinfo/1");
    console.log(response);
}
    fecthData()
        .then((response) => response.json())
        .then((json) => console.log(json))
}*/