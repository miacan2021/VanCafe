import React from 'react'
import Link from 'next/link';


const MobileMapCard = ({popupInfo, setPopupInfo}) => {
    return (
        <div className='w-screen h-1/4 bg-primary absolute bottom-0 left-0 flex items-center justify-center overflow-hidden'>
        <img src={popupInfo.featuredImage.node.sourceUrl} alt="cafe image" className='w-1/2 object-cover' />
        <div class="p-2 w-1/2 text-center text-b-n">
        <p className="text-sm mb-3">{popupInfo.title}</p>
        <p className="text-xs font-pra mb-2">{popupInfo.adress.adress}</p>
        <p className="font-pra whitespace-normal text-xs mb-2">{popupInfo.time.open} - {popupInfo.time.close}</p>
        <Link href={`https://maps.google.com?q=${popupInfo.location.lat},${popupInfo.location.lng}`}><a className="text-b-y text-sm">View on Google Maps</a></Link>
        <svg onClick={() => setPopupInfo(null)} className="w-6 h-6 absolute top-1 left-1/2 transform -translate-x-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
     </div>
     </div>
    )
}

export default MobileMapCard
