import React from 'react'
import Line from './Line'

const SectionTitle = (props) => {
   
    return (
        <div className="pt-10 pl-10 mb-8">
            <h1 className="text-2xl font-title text-primary tracking-widest mb-2">{props.title}</h1>
            <Line />
        </div>
          
    )
}

export default SectionTitle
