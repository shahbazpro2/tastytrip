import Link from 'next/link'
import React from 'react'

const SmallMenu = () => {
    return (
        <div className='absolute bottom-5 left-0  w-full px-4'>
            <div className="bg-white text-black h-[35vh] rounded-3xl rounded-bl-none rounded-br-none shadow-lg p-4">
                <Link href="/menu" >
                    <div className="m-auto w-10 h-2 rounded-full bg-gray-300 cursor-pointer"></div>
                </Link>
                <div className="grid grid-cols-2 gap-3 mt-2">
                    <div>
                        <div className="text-lg font-bold">Stat bar Boen</div>
                        <ul className='space-y-2 mt-2'>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a2 2 0 114 0H8z" clipRule="evenodd" />
                                </svg>
                                <span>Beef Chow Mein</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a2 2 0 114 0H8z" clipRule="evenodd" />
                                </svg>
                                <span>Deep Fried Sushi</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a2 2 0 114 0H8z" clipRule="evenodd" />
                                </svg>
                                <span>Deep Fried Sushi</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-lg font-bold">Soes Soup</div>
                        <ul className='space-y-2 mt-2'>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a2 2 0 114 0H8z" clipRule="evenodd" />
                                </svg>
                                <span>Beef Chow Mein</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a2 2 0 114 0H8z" clipRule="evenodd" />
                                </svg>
                                <span>Deep Fried Sushi</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM8 9a2 2 0 114 0H8z" clipRule="evenodd" />
                                </svg>
                                <span>Deep Fried Sushi</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-5 bg-secondary text-white w-full h-full mt-5 rounded-3xl">
                    <div className="grid grid-cols-3 gap-3">
                        <div className=''>
                            <img src="/assets/burger.jpg" alt="food" className='w-[70%] rounded-3xl' />
                            <div className="mt-2 ">
                                <div className="text-sm font-bold">hamburger </div>
                            </div>
                        </div>
                        <div>
                            <img src="/assets/burger.jpg" alt="food" className='w-[70%] rounded-3xl' />
                            <div className="mt-2">
                                <div className="text-sm font-bold">hamburger </div>
                            </div>
                        </div>
                        <div>
                            <img src="/assets/burger.jpg" alt="food" className='w-[70%] rounded-3xl' />
                            <div className="mt-2">
                                <div className="text-sm font-bold">hamburger </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SmallMenu