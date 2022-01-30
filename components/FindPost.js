import React from 'react'
import AreaBtn from './AreaBtn'
import Button from './Button'
import SectionTitle from './SectionTitle'

const FindPost = () => {
    return (
        <div className='w-10/12 mx-auto flex items-center flex-col lg:block'>
        <SectionTitle title={'FIND CAFES'} />
        <div className="w-full flex flex-col md:block justify-around">
        <div className="serch">
        <div className="flex text-primary mb-5  justify-center md:justify-start">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"></path></svg>
        <h2 className='uppercase text-lg font-para'>Serch by area</h2>
        </div>
        <AreaBtn />
        </div>
        <div className="serch">
        <div className="flex text-primary mb-5 justify-center md:justify-start">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"></path></svg>
        <h2 className='uppercase text-lg font-para'>Serch by map</h2>
        </div>
        <a className='flex justify-center md:justify-start' href="./map-search"><Button title={'Open the map'}></Button></a>
        </div>
        </div>
        <SectionTitle title={'NEW POSTS'} />
        </div>
    )
}

export default FindPost

