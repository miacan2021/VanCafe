import { useState } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import Pins from '../components/Pins';
import getAllMapData from '../lib/getAllMapData';
import MapHead from '../components/MapHead';
import Link from 'next/link'

const token = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN

const mapSearch = ({mapData}) => {
    const [viewport, setViewport] = useState({
        latitude: 49.246292,
        longitude: -123.116226,
        zoom: 12,
      });

      const [popupInfo, setPopupInfo] = useState(null);

      return (
        <>
        <MapHead />
        <div className="mapbox-react relative">
          <div className="absolute top-5 left-3 z-10 bg-primary rounded-md flex justify-center items-cente p-3 hover:bg-b-p hover:text-primary">
           <Link href="/"><a className='flex'>
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path></svg>
          Home</a></Link>
          </div>
          <ReactMapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle='mapbox://styles/miacan2021/ckx2yfuly4moi14lg6ny9mqja'
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={token}
          >
        <Pins data={mapData} setPopupInfo={setPopupInfo} />
        {popupInfo && !window.matchMedia('(max-width: 425px)').matches ? 
          <Popup
            tipSize={5}
            anchor="bottom-right"
            longitude={popupInfo.location.lng}
            latitude={popupInfo.location.lat}
            closeOnClick={false}
            onClose={setPopupInfo}
            onClick={() => setPopupInfo(null)} 
          >
          <MapCard data={popupInfo} />
          </Popup>
        : popupInfo && window.matchMedia('(max-width: 425px)').matches ? 
          <MobileMapCard popupInfo={popupInfo} setPopupInfo={setPopupInfo} />
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
