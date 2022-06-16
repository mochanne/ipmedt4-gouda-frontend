
//const api_base_url = "http://192.168.43.66:8000/api/routeinfo/1"

import { useState, useEffect} from "react";

export default function APIget(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        //.then((response) => console.log(response))
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => console.log(actualData))
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
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