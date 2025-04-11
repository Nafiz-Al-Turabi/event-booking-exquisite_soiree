'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import borderShape from '@/public/rentalImages/border.png';
import bgShape from '@/public/rentalImages/bg shapes.svg';
import bgShape2 from '@/public/rentalImages/bg shapes2.svg';
import threeD from '@/public/rentalImages/Asterisk.svg';

const RentalPrice1 = [
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Two-suite restroom rental trailer, fully stocked with supplies. A/C and heat provided. Bluetooth radio available.',
        price: '$600',
        duration: '4 Hour',
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Fully stocked, Bluetooth radio, climate control.',
        price: '$700',
        duration: '5 Hour',
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Fully stocked, Bluetooth radio, climate control.',
        price: '$900',
        duration: '6 Hour',
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Fully stocked, Bluetooth radio, climate control.',
        price: '$1,050',
        duration: '7 Hour',
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Fully stocked, Bluetooth radio, climate control.',
        price: '$1,200',
        duration: '8 Hour',
    },
    {
        title: '2-Suite Luxury Restroom Trailer',
        description: 'Fully stocked, Bluetooth radio, climate control.',
        price: '$1,350',
        duration: '9 Hour',
    },
];

const RentalPrice2 = [
    {
        title: 'Photo Booth Rental',
        description: 'Unlimited Photos and GIFs, onsite sharing, backdrop gallery, attendant included, travel up to 1 hour.',
        diposit: '50% deposit required to secure booking date.',
        price: '$1,350',
        duration: '9 Hour',
    },
    {
        title: 'Photo Booth Rental',
        description: 'Same as above with additional props and effects.',
        diposit: '50% deposit required to secure booking date.',
        price: '$1,350',
        duration: '9 Hour',
    },
];

export default function RentalPrice() {
    const [activeTab, setActiveTab] = useState('restroom');
    const data = activeTab === 'restroom' ? RentalPrice1 : RentalPrice2;

    return (
        <div>
            {/* Tabs */}
            <div className='max-w-[51.5rem] mx-auto text-center bg-[#201F1E] border border-[#C7C7C7] rounded-[16px] p-4 lg:p-6 mb-8'>
                <div className='grid grid-cols-2 gap-4'>
                    {[
                        { key: 'restroom', label: '2-Suite Luxury\nRestroom Trailer' },
                        { key: 'booth', label: 'Photo Booth Rental' },
                    ].map((tab) => (
                        <div
                            key={tab.key}
                            className={` ${activeTab === tab.key ? 'p-[1px] bg-gradient-to-tl from-yellow-700 via-yellow-300 to-yellow-700 rounded-2xl' : 'opacity-50'
                                }`}
                        >
                            <button
                                className={`w-full h-full text-2xl Playfair-font font-bold text-white p-6 rounded-2xl cursor-pointer relative overflow-hidden z-40 ${activeTab === tab.key ? "bg-[#1A1918]" : ""}`}
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
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
                    {data.map((item, index) => (
                        <div key={index} className='group duration-300 h-full'>
                            <div className='bg-gradient-to-tl group-hover:from-yellow-700 group-hover:via-yellow-300 group-hover:to-yellow-700 p-[1px] rounded-3xl relative h-full'>
                                <Image src={borderShape} alt='border-shape' className='absolute -top-1 translate-x-2/13 z-20' />
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
                                    <button className='w-full rounded-lg border border-[#C7C7C7] group-hover:border-[#deb94a] group-hover:bg-[#deb94a] duration-300 py-4 text-lg font-semibold cursor-pointer mt-auto'>
                                        Choose this plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
