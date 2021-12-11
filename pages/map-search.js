import { useState } from 'react';
import ReactMapGL, {FullscreenControl, Popup} from 'react-map-gl';
import Pins from '../components/Pins';
import getAllMapData from '../lib/getAllMapData';
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
        <div className="mapbox-react">
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
        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.location.lng}
            latitude={popupInfo.location.lat}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
        <Link href={`/cafe/${popupInfo.slug}`}><a>Link to article</a></Link>
         <h1>{popupInfo.title}</h1>
          </Popup>
        )}
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
