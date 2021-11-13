import React from 'react'
import FindPost from '../components/FindPost'
import HeadComponent from '../components/Head'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const HOME = () => {
    return (
    <>
        <HeadComponent/>
        <Nav />
        <Hero />
        <FindPost />
    </>
    )
}

export default HOME
