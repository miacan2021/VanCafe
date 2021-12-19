import React from 'react'

const Button = ({title}) => {
    return (
        <button className="bg-primary border border-b-n font-button text-b-n  py-2 px-7 rounded 
                hover:bg-b-p tracking-widest mb-4 uppercase">
               {title}</button>
    )
}

export default Button
