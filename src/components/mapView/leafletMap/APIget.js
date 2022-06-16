//import React from 'react';

//const api_base_url = "http://192.168.43.66:8000/api/routeinfo/1"


//fetch(api_base_url)

function APIget() {
async function fecthData(){
    const response = await fetch("http://192.168.43.66:8000/api/routeinfo/1");
    console.log(response);
}
    fecthData()
        .then((response) => response.json())
        .then((json) => console.log(json))
}

export default APIget;