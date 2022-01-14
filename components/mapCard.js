import React from 'react'
import Link from 'next/link';


const MapCard = ({ popupInfo}) => {
    return (
    <div className='text-center rounded overflow-hidden'>
    <img src={ popupInfo.featuredImage.node.sourceUrl} alt="cafe image" className='w-full max-w-xs h-28 lg:h-36 object-cover mx-auto' />
    <div class="sm:px-0 lg:px-6 md:py-4 max-w-xs">
    <p className="text-sm lg:text-md mb-2">{ popupInfo.title}</p>
    <p className="text-xs lg:text-sm font-pra mb-1">{ popupInfo.adress.adress}</p>
    <p className="w-64 font-pra mb-2 whitespace-normal text-xs">{ popupInfo.time.open} - { popupInfo.time.close}</p>
    <Link href={`/cafe/${ popupInfo.slug}`}><a className="text-b-y text-sm lg:text-md">Go to detail page</a></Link><br />
    <Link href={`https://maps.google.com?q=${ popupInfo.location.lat},${ popupInfo.location.lng}`}><a className="text-b-y text-sm lg:text-md">View on Google Maps</a></Link>
    </div>
    </div>
    )
}

export default MapCard
