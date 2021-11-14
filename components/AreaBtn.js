import React from 'react'
import Link from 'next/link'


const AreaBtn = () => {
    const areas = [
        'downtown',
        'vancouver-east',
        'vancouver-west'
    ]
    return (
        <div className="flex justify-around flex-col md:flex-row w-3/6 lg:w-screen m-auto">
            {areas.map((area,i) => (
                <Link href={area}>
                <a>
                <button key={i}
                className="bg-primary border border-b-n font-button text-b-n  py-2 px-7 rounded 
                hover:bg-b-p tracking-widest mb-4 md:ml-5 uppercase">
                {area}
              </button>
              </a>
              </Link>
            ))}
        </div>
    )
}

export default AreaBtn
