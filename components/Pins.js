import React from 'react'
import {Marker} from 'react-map-gl';

const Pins = ({data, setPopupInfo}) => {
     
    return data.map(info => (
        <Marker key={info.title} longitude={info.location.lng} latitude={info.location.lat}>
        <svg onClick={()=> setPopupInfo(info)} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11.5" cy="8.5" r="5.5"/><path d="M11.5 14v7"/></svg>          
        </Marker>
  ))
}


export default Pins
