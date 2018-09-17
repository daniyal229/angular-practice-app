import React, { Component } from 'react';
import Chart from './chart';
import GoogleMap from './google-map';

export default function(props){
    console.log('eerer',props.cityData)
    if(!props.cityData)
        return( <div>Invalid City</div> );
    else {
        let temps = [], pressures = [], humidities = [];
        props.cityData.list.map((listItem)=>{
            temps.push(listItem.main.temp-273.15);
            pressures.push(listItem.main.pressure);
            humidities.push(listItem.main.humidity);
        });
        console.log('sfssdfsdfsdf',props.cityData.city.coord)
        const {lon, lat} = props.cityData.city.coord;
    
        return(
            <tr>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={temps} color="orange" units="C"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%"/>
                </td>
            </tr>
        );
    }
}