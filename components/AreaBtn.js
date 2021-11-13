import React from 'react'

const AreaBtn = () => {
    const areas = [
        'DOWNTOWN',
        'VANCOUVER EAST',
        'VANCOUVER WEST'
    ]
    return (
        <div className="flex justify-around flex-col md:flex-row w-3/6 lg:w-screen m-auto">
            {areas.map((area,i) => (
                <button key={i}
                class="bg-primary border border-b-n font-button text-b-n  py-2 px-7 rounded 
                hover:bg-b-p tracking-wider mb-4 md:ml-5">
                {area}
              </button>
            ))}
        </div>
    )
}

export default AreaBtn
