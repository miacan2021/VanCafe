import React from 'react'
import Link from 'next/link'
import Button from './Button'


const AreaBtn = () => {
    const areas = [
        'downtown',
        'vancouver-east',
        'vancouver-west',
        'other-cities'
    ]
    return (
        <div className="mb-4 flex justify-between flex-col md:flex-row m-auto">
            {areas.map((area,i) => (
                <Link href={area}>
             <a>
              <Button key={i} title={area}></Button>
              </a>
              </Link>
            ))}
        </div>
    )
}

export default AreaBtn
