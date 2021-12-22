import React from 'react'
import Image from 'next/image'
import HeroImg from '../public/hero.jpg'

const Hero = () => {
    return (
        <div className="w-screen flex md:flex-row flex-col">
            <div className="lg:block absolute top-1/2 left-1/2 w-4/12 max-w-md transform -translate-y-1/2 -translate-x-1/2 border border-primary rounded-full hidden p-3">
            <Image src={HeroImg} className="rounded-full" />
             </div>
            <div className="w-screen md:w-6/12 h-screen bg-primary border border-primary flex flex-col items-center lg:items-start justify-center">
            <div className="w-11/12 lg:w-5/12 m-auto lg:ml-24 flex flex-col items-center text-center">
            <h2 className="font-title mb-10 tracking-wide text-2xl text-b-n uppercase pr-1">Are you looking for a cafe for work or study?</h2>
            <p className="font-para text-lg text-b-n mb-10 p-2">You can find cafes in Vancouver that have power outlets and Wi-Fi available.</p>
            <button class="font-button tracking-widest bg-transparent border border-b-n text-b-n py-2 px-4 rounded
            hover:bg-b-p">
            FIND CAFES</button>
            </div>
            </div>
            <div className="w-screen md:w-6/12 h-screen bg-b-p border border-primary flex flex-col items-center lg:items-end justify-center">
             <div className="w-11/12 lg:w-5/12 m-auto lg:mr-24 flex flex-col items-center text-center">
             <h2 className="font-title mb-10 tracking-wide text-2xl text-b-n uppercase">Request for using this web service</h2>
             <p className="font-para text-lg text-b-n mb-10 p-2">
             It is not recommended to occupy a seat for a long time. Please use the café with good manners.
            If you have any information about cafes with wifi and power outlets, please fill out the request form and send it to me.
            Thank you for your cooporation.
             </p>
             </div>
            </div>
            </div>
       
    )
}

export default Hero
