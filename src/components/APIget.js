//const api_base_url = "http://lillibot.co.uk:8080"
// test link `https://jsonplaceholder.typicode.com/posts`

import { useState, useEffect} from "react";
import RoutingMachine from "./RoutingMachine";
import QRMarkers from './QRMarkers';

import axios from "axios";

export default function APIget(){
    const [data, setData] = useState(null);

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

    let infopoints;
    let QRpoints;

    if (data !== null){
      infopoints = <RoutingMachine QRMarkers={data.infopoints} />
    }

    if (data !== null){
      QRpoints = <QRMarkers QRMarkers={data.infopoints}/>
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