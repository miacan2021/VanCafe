import React from 'react'
import Link from 'next/link';


const MapCard = ({data}) => {
    return (
    <div className='text-center rounded overflow-hidden'>
    <img src={data.featuredImage.node.sourceUrl} alt="cafe image" className='w-full max-w-xs h-28 lg:h-36 object-cover mx-auto' />
    <div class="sm:px-0 lg:px-6 md:py-4 max-w-xs">
    <p className="text-sm lg:text-md mb-2">{data.title}</p>
    <p className="text-xs lg:text-sm font-pra mb-1">{data.adress.adress}</p>
    <p className="w-64 font-pra mb-2 whitespace-normal text-xs">{data.time.open} - {data.time.close}</p>
    <Link href={`/cafe/${data.slug}`}><a className="text-b-p text-sm lg:text-md">Go to detail page</a></Link>
    <Link href={`https://maps.google.com?q=${data.location.lat},${data.location.lng}`}><a className="text-b-p text-sm lg:text-md">View on Google Maps</a></Link>
    </div>
    </div>
    )
}

export default MapCard
