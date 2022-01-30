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
              <div className='text-center rounded overflow-hidden'>
              {popupInfo.featuredImage ? 
                 <img className='w-full max-w-xs h-28 lg:h-36 object-cover mx-auto' src={popupInfo.featuredImage.node.sourceUrl} alt="cafe image" /> :
                 <img className='w-full max-w-xs h-28 lg:h-36 object-cover mx-auto' src='/Noimage.png' alt="cafe image"/>
                }     
              <div class="sm:px-0 lg:px-6 md:py-4 max-w-xs">
              <p className="text-sm lg:text-md mb-2">{ popupInfo.title}</p>
              <p className="text-xs lg:text-sm font-pra mb-1">{ popupInfo.adress.adress}</p>
              <p className="w-64 font-pra mb-2 whitespace-normal text-xs">{ popupInfo.time.open} - { popupInfo.time.close}</p>
              <Link href={`/cafe/${ popupInfo.slug}`}><a className="text-b-y text-sm lg:text-md">Go to detail page</a></Link><br />
              <Link href={`https://maps.google.com?q=${ popupInfo.location.lat},${ popupInfo.location.lng}`}><a className="text-b-y text-sm lg:text-md">View on Google Maps</a></Link>
              </div>
              </div>
          </Popup>
        : popupInfo && window.matchMedia('(max-width: 425px)').matches ? 
              <div className='w-screen h-1/3 bg-primary absolute bottom-3 left-0 flex items-center justify-center overflow-hidden'>
                {popupInfo.featuredImage ? 
                 <img className='w-1/2 object-cover' src={popupInfo.featuredImage.node.sourceUrl} alt="cafe image" /> :
                 <img className='w-1/2 object-cover' src='/Noimage.png' alt="cafe image"/>
                }             
              <div class="py-2 px-1 w-1/2 text-center text-b-n">
              <p className="text-xs font-bold mb-2">{popupInfo.title}</p>
              <p className="font-pra whitespace-normal text-xs mb-1">{popupInfo.time.open} - {popupInfo.time.close}</p>
              <div className="flex flex-col">
              <Link href={`/cafe/${popupInfo.slug}`}><a className="text-b-y text-sm lg:text-md">Go to detail page</a></Link>
              <Link href={`https://maps.google.com?q=${popupInfo.location.lat},${popupInfo.location.lng}`}><a className="text-b-y text-sm">View on Google Maps</a></Link>
              </div>
              <svg onClick={() => setPopupInfo(null)} className="w-6 h-6 absolute top-1 left-1/2 transform -translate-x-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
