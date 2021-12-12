import React from 'react'
import Head from 'next/head'

const MapHead = () => {
    return (
        <Head>
        <title>Map-search | WORK FRIENDRY CAFE - VAN</title>
        <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Prata&family=Quattrocento+Sans:ital@0;1&display=swap" rel="stylesheet" / >
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js"></script>
        </Head>
    )
}

export default MapHead
