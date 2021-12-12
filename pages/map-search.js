import { useState } from 'react';
import ReactMapGL, {FullscreenControl, Popup} from 'react-map-gl';
import Pins from '../components/Pins';
import getAllMapData from '../lib/getAllMapData';
import MapCard from '../components/MapCard';
import Link from 'next/link';

const token = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN

const fullscreenControlStyle= {
    right: 10,
    top: 10
  };
  

const mapSearch = ({mapData}) => {
    //target map
    const [viewport, setViewport] = useState({
        latitude: 49.246292,
        longitude: -123.116226,
        zoom: 11.8,
      });

      const [popupInfo, setPopupInfo] = useState(null);
      return (
          <>
        <div className="mapbox-react relative">
          <ReactMapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={token}
          >
        <FullscreenControl style={fullscreenControlStyle} />
        <Pins data={mapData} setPopupInfo={setPopupInfo} />
        {popupInfo && !window.matchMedia('(max-width: 425px)').matches ? 
          <Popup
            tipSize={5}
            anchor="bottom-right"
            longitude={popupInfo.location.lng}
            latitude={popupInfo.location.lat}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
          <MapCard data={popupInfo} />
          </Popup>
        : popupInfo && window.matchMedia('(max-width: 425px)').matches ? 
       <div className='w-screen h-1/4 bg-primary absolute bottom-0 left-0 flex items-center justify-center overflow-hidden'>
       <img src={popupInfo.featuredImage.node.sourceUrl} alt="cafe image" className='w-1/2 object-cover' />
       <div class="p-2 w-1/2 text-center">
       <p className="text-sm mb-2">{popupInfo.title}</p>
       <p className="text-xs font-pra mb-1">{popupInfo.adress.adress}</p>
       <p className="font-pra whitespace-normal text-xs">{popupInfo.time.open} - {popupInfo.time.close}</p>
       <Link href={`https://maps.google.com?q=${popupInfo.location.lat},${popupInfo.location.lng}`}><a className="text-b-p text-sm">View on Google Maps</a></Link>
       <svg  onClick={() => setPopupInfo(null)} className="w-6 h-6 absolute top-0 left-1/2 transform -translate-x-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
    </div>
    </div>
     
       
        : <></>
        }
          </ReactMapGL>
        </div>
        </>
        )
}

export default mapSearch

export async function getStaticProps(){
    const mapData = await getAllMapData()
    return {
        props: { mapData },
    }
}
