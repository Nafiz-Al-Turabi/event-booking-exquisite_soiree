'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import borderShape from '@/public/rentalImages/border.png';
import bgShape from '@/public/rentalImages/bg shapes.svg';
import bgShape2 from '@/public/rentalImages/bg shapes2.svg';
import threeD from '@/public/rentalImages/Asterisk.svg';
import backgroundImage from '@/public/Group3.svg'


const RentalPrice1 = [
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Two-suite restroom rental trailer, fully stocked with supplies. A/C and heat provided. Bluetooth radio available.',
        price: '$600',
        duration: '4 Hour',
        // link: "https://exquisitesoire.simplybook.me/v2/#book/service/3"
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Two-suite restroom rental trailer, fully stocked with supplies. A/C and heat provided. Bluetooth radio available.',
        price: '$700',
        duration: '5 Hour',
        // link: "https://exquisitesoire.simplybook.me/v2/#book/service/4",
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Two-suite restroom rental trailer, fully stocked with supplies. A/C and heat provided. Bluetooth radio available.',
        price: '$900',
        duration: '6 Hour',
        // link: "https://exquisitesoire.simplybook.me/v2/#book/service/5"
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Two-suite restroom rental trailer, fully stocked with supplies. A/C and heat provided. Bluetooth radio available.',
        price: '$1,050',
        duration: '7 Hour',
        // link: "https://exquisitesoire.simplybook.me/v2/#book/service/8"
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Two-suite restroom rental trailer, fully stocked with supplies. A/C and heat provided. Bluetooth radio available.',
        price: '$1,200',
        duration: '8 Hour',
        // link: "https://exquisitesoire.simplybook.me/v2/#book/service/6"
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Two-suite restroom rental trailer, fully stocked with supplies. A/C and heat provided. Bluetooth radio available. ',
        price: '$1,350',
        duration: '9 Hour',
        // link: "https://exquisitesoire.simplybook.me/v2/#book/service/7"
    },
];

const RentalPrice2 = [
    {
        title: 'Photo Booth Rental',
        description: 'Unlimited Photos and GIFs, Onsite text and Email sharing, Backdrop Online Gallery, Custom Booth interface, Custom overlay, On-site Photo Booth Attendant, Set up and Breakdown, Travel up to 1 hour',
        price: ' $500',
        duration: '4 Hour ',
        // link: "https://exquisitesoire.simplybook.me/v2/#book/service/9"
    },
    {
        title: 'Photo Booth Rental',
        description: "Unlimited Photos and Gifs, Boomerang’s Black and White Glam Filter up to 200 onsite prints, unlimited text and Email sharing, Custom booth Interface, Props, Custom print templates, Backdrop, Onsite Gallery, On-site attendant, Set up and breakdown, Travel up to 1 hour.",
        price: '$700-Luxury ',
        duration: '4 Hour ',
        // link: "https://exquisitesoire.simplybook.me/v2/#book/service/10"
    },
];

export default function RentalPrice() {
    const [activeTab, setActiveTab] = useState('booth');
    const [showNotification, setShowNotification] = useState(false);
    const data = activeTab === 'restroom' ? RentalPrice1 : RentalPrice2;

    const handleChoosePlan = () => {
        setShowNotification(true);
        // Auto-hide notification after 5 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    };

    return (
        <div className='relative'>
            {/* Notification */}
            {showNotification && (
                <div className='fixed top-4 right-4 z-50 bg-[#deb94a] text-black px-6 py-4 rounded-lg shadow-lg border border-[#deb94a] animate-slide-in'>
                    <div className='flex items-center space-x-3'>
                        <div className='flex-shrink-0'>
                            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
                            </svg>
                        </div>
                        <div>
                            <p className='text-sm sm:text-basefont-semibold'>Please send us an email to book.</p>
                        </div>
                        <button 
                            onClick={() => setShowNotification(false)}
                            className='flex-shrink-0 ml-2 text-black hover:text-gray-700'
                        >
                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <Image src={backgroundImage} alt="Background" className="absolute -bottom-96 left-0 opacity-5 " />
            <div className='px-4 2xl:px-0 relative z-40 pt-[100px]'>
                <div className='flex flex-col justify-center items-center text-white mb-12 '>
                    <h1 className='text-3xl sm:text-[3.5rem] analogue-font mb-6'>Rental Price & hours</h1>
                    <p className='text-base sm:text-lg text-[#D2D2D5]'>We offer competitive pricing with flexible rental durations.</p>
                </div>
                {/* Tabs */}
                <div className='max-w-[51.5rem] mx-auto text-center bg-[#201F1E] border border-[#C7C7C7] rounded-[16px] p-2 sm:p-4 lg:p-6 mb-8 '>
                    <div className='grid grid-cols-2 gap-4'>
                        {[
                            { key: 'booth', label: 'Photo Booth Rental' },
                            { key: 'restroom', label: '2-Suite Luxury\nRestroom Trailer' },
                        ].map((tab) => (
                            <div
                                key={tab.key}
                                className={` ${activeTab === tab.key ? 'p-[1px] bg-gradient-to-tl from-yellow-700 via-yellow-300 to-yellow-700 rounded-2xl' : 'opacity-50'
                                    }`}
                            >
                                <button
                                    className={`w-full h-full text-xs sm:text-lg lg:text-2xl Playfair-font font-bold text-white p-2 sm:p-4 lg:p-6 rounded-2xl cursor-pointer relative overflow-hidden z-40 ${activeTab === tab.key ? "bg-[#1A1918]" : ""}`}
                                    onClick={() => setActiveTab(tab.key)}
                                >
                                    <span className='relative z-40 whitespace-pre-line'>{tab.label}</span>
                                    <Image src={bgShape2} alt='bg-shape' className={`absolute bottom-0 right-1 z-0 ${activeTab === tab.key ? '' : "hidden "}`} />
                                    <div className={`${activeTab === tab.key ? 'h-[80px] rounded-ball2 w-[80px] bg-[#F2E462] absolute rounded-full -top-8 left-2/5 duration-300' : ""}`}></div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className='max-w-[82.5rem] mx-auto bg-[#1f1e1d] rounded-[16px] p-4 lg:p-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch '>
                        {data.map((item, index) => (
                            <div key={index} className='group duration-300 h-full'>
                                <div className='bg-gradient-to-tl group-hover:from-yellow-700 group-hover:via-yellow-300 group-hover:to-yellow-700 p-[1px] rounded-3xl relative h-full'>
                                    <Image src={borderShape} alt='border-shape' className='absolute -top-1 translate-x-2/13 z-20 hidden sm:block' />
                                    <div className='h-full flex flex-col justify-between text-white bg-[#1A1918] rounded-3xl p-4 sm:p-6 relative overflow-hidden'>
                                        <Image src={bgShape} alt='bg-shape' className='absolute top-0 -right-1' />
                                        <Image
                                            src={threeD}
                                            alt='3d-shape'
                                            width={77}
                                            height={77}
                                            className='mt-[54px] mb-[29px] grayscale-100 group-hover:grayscale-0 duration-300'
                                        />
                                        <div className='h-[159px] rounded-ball w-[149px] bg-white group-hover:bg-[#f2e462] absolute rounded-full -top-32 translate-x-2/3 duration-300'></div>
                                        <div className='space-y-5'>
                                            <h1 className='text-2xl Playfair-font font-bold max-w-[16ch]'>{item.title}</h1>
                                            <p>{item.description}</p>
                                            {item.diposit && (
                                                <p className='text-sm italic text-yellow-200'>{item.diposit}</p>
                                            )}
                                            <div className='flex justify-between items-center text-xl font-bold text-[#DEB94A] my-[29px]'>
                                                <p>{item.price}</p>
                                                <span>-</span>
                                                <p>{item.duration}</p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={handleChoosePlan}
                                            className='w-full text-center rounded-lg border border-[#C7C7C7] group-hover:border-[#deb94a] group-hover:bg-[#deb94a] duration-300 py-4 text-lg font-semibold cursor-pointer mt-auto'
                                        >
                                            Choose this plan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
