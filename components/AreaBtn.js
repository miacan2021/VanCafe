import React from 'react'
import Link from 'next/link'
import Button from './Button'


const AreaBtn = () => {
    const areas = [
        'downtown',
        'east-vancouver',
        'west-vancouver',
        'other-cities'
    ]
    return (
        <div className="mb-4 flex justify-center items-center md:justify-between flex-col md:flex-row m-auto text-sm">
            {areas.map((area,i) => (
            <Link href={`/${area}`} key={i}>
             <a>
              <Button title={area}></Button>
              </a>
            </Link>
            ))}
        </div>
    )
}

export default AreaBtn
