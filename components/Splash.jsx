/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Splash = () => {
    return (
        <div className=' w-full sm:w-[450px] h-screen flex flex-col justify-center items-center '>
            <img src="/assets/splash.jpg" alt="splash" className='w-[85%]' />
            <div className="mt-14">
                <Link href="/trip" className="border-4 border-primary rounded-xl px-10 py-1 text-xl sm:text-2xl flex items-center gap-5">
                    <div>
                        <span className='text-primary'>S</span>tart <span className='text-primary'>T</span>rip
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>

                </Link>
            </div>

        </div>
    )
}

export default Splash