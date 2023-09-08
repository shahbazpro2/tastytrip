import React from 'react'
import Map from '../../Map'
import dynamic from 'next/dynamic'
import SmallMenu from './SmallMenu'

const Trip = () => {
    return (
        <div className='container relative h-screen'>
            <div className='h-[65vh]'>
                <Map />
            </div>
            <SmallMenu />
        </div>
    )
}

export default Trip