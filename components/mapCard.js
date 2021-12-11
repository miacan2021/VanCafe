import React, {useMemo} from 'react'

const mapCard = ({name, lat, lng, time, adress, img}) => {
    return (
    <div className="cursor-pointer bg-white w-40 h-auto p-1 text-b-n rounded-sm flex flex-col justify-center items-center transform -translate-x-28 -translate-y-10">
    <p className="text-md">{name}</p>
    <p className="font-pra text-center mb-1">{adress}</p>
    <p>{time.open} - {time.close}</p>
    <img src={img} alt="cafe image" />
    <Link href={`https://maps.google.com?q=${lat},${lng}`}><a className="text-b-p">View on Google Maps</a></Link>
</div>
    )
}

export default useMemo(mapCard)
