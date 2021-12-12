import { useState } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import Pins from '../components/Pins';
import getAllMapData from '../lib/getAllMapData';
import MapCard from '../components/MapCard';
import MobileMapCard from '../components/MobileMapCard';

const token = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN

const mapSearch = ({mapData}) => {
    const [viewport, setViewport] = useState({
        latitude: 49.246292,
        longitude: -123.116226,
        zoom: 12
      });

      const [popupInfo, setPopupInfo] = useState(null);

      return (
          <>
        <div className="mapbox-react relative">
          <ReactMapGL
            {...viewport}
            width="100vw"
            height="100vh"
            style='mapbox://styles/miacan2021/ckx2yfuly4moi14lg6ny9mqja'
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
