import React from 'react'

const Button = ({title}) => {
    return (
        <button className="bg-primary border border-b-n font-button text-b-n p-3 lg:py-2 lg:px-7 rounded 
                hover:bg-b-p tracking-widest mb-4 uppercase text-sm md:text-md lg:text-lg whitespace-no-wrap">
               {title}</button>
    )
}

export default Button
