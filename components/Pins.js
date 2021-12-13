import React from 'react'
import {Marker} from 'react-map-gl';

const Pins = ({data, setPopupInfo}) => {
    return data.map(info => (
        <Marker key={info.title} longitude={info.location.lng} latitude={info.location.lat}>
        <svg  onClick={()=> setPopupInfo(info)} xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 transform -translate-x-3 -translate-y-5' viewBox="0 0 24 24" fill="none" stroke="#253D55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
        </Marker>
  ))
}


export default Pins
