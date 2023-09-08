'use client'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Tab } from '@mui/material';
import { useRouter } from 'next/navigation';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const FullMenu = () => {
    const [tab, setTab] = React.useState(0)
    const [value, setValue] = React.useState('1');
    const router = useRouter()

    const handleChange = (event, newValue) => {
        const targetId = event.target.innerText?.toLowerCase()?.replaceAll(' ', '-')
        //router.push(`#${targetId}`)
        const elem = document.getElementById(targetId);
        elem.scrollIntoView({ behavior: 'smooth' });

        setValue(newValue);
    };

    return (
        <div className='container'>
            <div className="w-full relative">
                <div className="absolute top-2 flex justify-between w-full px-4">
                    <div className="bg-white text-black rounded-full p-2 cursor-pointer" onClick={() => router.push('/trip')}>
                        <KeyboardBackspaceIcon />
                    </div>
                    <div className='flex gap-3'>
                        <div className="bg-white text-black rounded-full p-2 cursor-pointer">
                            {/* search icon  */}
                            <SearchIcon />
                        </div>
                        <div className="bg-white text-black rounded-full p-2 cursor-pointer">
                            {/* more icon  */}
                            <MoreHorizIcon />
                        </div>

                    </div>
                </div>
                <img src="/assets/food.jpeg" alt="food" className='w-full' />
            </div>
            <div className="bg-white text-black py-2 px-3">
                <div className="text-xl font-bold">Soes Soup</div>
                <div className="mt-3 flex items-center gap-2"><StarIcon /> 4.5 (500+ ratings).Burgers.RR</div>
                <div className="text-gray-500">Open until 10:00 PM</div>
                <div className="text-gray-500">Tap for hours, info and more</div>

                <div className="mt-4">
                    <div className="bg-gray-200 p-1.5 rounded-full text-sm">
                        <div className="grid grid-cols-2">
                            <div className={`rounded-full h-14 flex flex-col items-center justify-center cursor-pointer ${tab === 0 ? 'bg-white' : ''}`} onClick={() => setTab(0)}>
                                <div className="text-lg">Delivery</div>
                                <div className='-mt-1'>10-25 min-R11</div>
                            </div>
                            <div className={`rounded-full h-14 flex flex-col items-center justify-center cursor-pointer ${tab === 1 ? 'bg-white' : ''}`} onClick={() => setTab(1)}>
                                <div className="text-lg">Pick-up</div>
                                <div className='-mt-1'>5-15min - 1.9km</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList variant="scrollable" onChange={handleChange}>
                                <Tab label="Featured items" value="1" />
                                <Tab label="Order again" value="2" />
                                <Tab label="Picked for you" value="3" />
                                <Tab label="Nazo" value="4" />
                                <Tab label="Burgers" value="5" />
                                <Tab label="Chicken" value="6" />
                                <Tab label="Snacks and sides" value="7" />
                                <Tab label="Desserts" value="8" />
                            </TabList>
                        </Box>
                    </TabContext>
                    <div className="mt-5">
                        <div id="featured-items">
                            <div className="text-xl font-bold">Featured items</div>
                            <div className="grid grid-cols-3 gap-4 mt-3">
                                <div className='text-center'>
                                    <img src="/assets/burger.jpg" alt="burger" className='w-[60%] m-auto' />
                                    <div className="text-lg font-bold">Burger</div>
                                    <div className="text-gray-500">R 50.00</div>
                                </div>
                                <div className='text-center'>
                                    <img src="/assets/burger.jpg" alt="burger" className='w-[60%] m-auto' />
                                    <div className="text-lg font-bold">Burger</div>
                                    <div className="text-gray-500">R 50.00</div>
                                </div>
                                <div className='text-center'>
                                    <img src="/assets/burger.jpg" alt="burger" className='w-[60%] m-auto' />
                                    <div className="text-lg font-bold">Burger</div>
                                    <div className="text-gray-500">R 50.00</div>
                                </div>
                            </div>
                        </div>
                        <div id="order-again" className='mt-20'>
                            <div className="text-xl font-bold">Order again</div>
                            <div className="space-y-3 mt-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-2/3">
                                        <div className="text-base font-bold">Grand Chicken Spicy Medium Meal</div>
                                        <div className="text-gray-500">R 109.90</div>
                                    </div>
                                    <div className="w-1/3">
                                        <img src="/assets/cake.jpeg" alt="cake" className='w-full' />
                                    </div>

                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="w-2/3">
                                        <div className="text-base font-bold">Grand Chicken Spicy Medium Meal</div>
                                        <div className="text-gray-500">R 109.90</div>
                                    </div>
                                    <div className="w-1/3">
                                        <img src="/assets/stake.jpg" alt="burger" className='w-full' />
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div id="picked-for-you" className='mt-20'>
                            <div className="text-xl font-bold">Picked for you</div>
                            <div className="space-y-3 mt-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-2/3">
                                        <div className="text-base font-bold">Happy Meal 4pc McChicken McNuggets</div>
                                        <div className="text-gray-500">R 64.90</div>
                                        <div className="text-gray-300">Nuggets and a drinks with a toy</div>
                                    </div>
                                    <div className="w-1/3">
                                        <img src="/assets/cake.jpeg" alt="cake" className='w-full' />
                                    </div>

                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="w-2/3">
                                        <div className="text-base font-bold">Grand Chicken Spicy Medium Meal</div>
                                        <div className="text-gray-500">R 109.90</div>
                                    </div>
                                    <div className="w-1/3">
                                        <img src="/assets/stake.jpg" alt="burger" className='w-full' />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullMenu