import React from 'react'
import AreaBtn from './AreaBtn'
import SectionTitle from './SectionTitle'


const FindPost = () => {
    return (
        <>
        <SectionTitle title={'FIND CAFES'} />
        <AreaBtn />
        <a href="/map-search">Search from maps</a>
        <SectionTitle title={'NEW POSTS'} />
        </>
    )
}

export default FindPost

