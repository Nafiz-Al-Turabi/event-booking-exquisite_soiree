'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import image1 from '@/public/images/restroo.jpeg';
import image2 from '@/public/photobooth/photobooth2.jpg';
import image3 from '@/public/gallery/Miscellaneous.jpg';
import backgroundImage from '@/public/Group5.svg'



const services = [
    {
        title: 'Luxury Restroom Rentals',
        subtitle: 'Spacious, Climate-Controlled, and Sanitized',
        points: [
            'Running water, flushing toilets & premium finishes',
            'LED lighting & mirror stations for a luxury experience',
            'Ideal for weddings, corporate events, VIP gatherings',
        ],
        img: image1,
        // link: "https://exquisitesoire.simplybook.me/v2/#book/count/1/"
    },
    {
        title: 'Photo Booth Rentals',
        subtitle: 'Capture Fun Moments Instantly!',
        points: [
            'High-quality photos, instant prints & digital sharing',
            'Custom backdrops, fun props & GIF/ Boomerang features',
            'Perfect for parties, weddings, & corporate events',
        ],
        img: image2,
        // link: "https://exquisitesoire.simplybook.me/v2/#book/count/1/"
    },
    {
        title: 'Miscellaneous',
        subtitle: 'Portable Bar & Dance Floor Fun',
        points: [
            'Quick assembly for instant party vibes anywhere.',
            'Ideal for weddings, parties, and outdoor gatherings.',
            'Modern design with great functionality and appeal.',
        ],
        img: image3,
        // link: "https://exquisitesoire.simplybook.me/v2/#book/count/1/"
    },
];

const OurServices = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleReserveNow = () => {
        setShowNotification(true);
        // Auto-hide notification after 5 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    };

    return (
        <div className='relative'>
            <Image src={backgroundImage} alt="Background" className="absolute bottom-0 right-0 opacity-5 " />

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
                            <p className='font-semibold'>To book send us email</p>
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

            <section className="pb-[148px] pt-[100px] px-4 text-white relative z-40 ">
                <h2 className="text-white text-4xl sm:text-[3.5rem] text-center analogue-font font-semibold mb-10">Our Services</h2>
                <div className="max-w-[82.5rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl overflow-hidden rgb-bg p-[1px] h-full"
                        >
                            <div className="bg-[#1f1e1d] rounded-3xl p-5 h-full flex flex-col">
                                <div className="relative w-full h-[339px]">
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        fill
                                        className="object-cover rounded-2xl"
                                    />
                                </div>
                                <div className="pt-1 flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 className="text-[2rem] analogue-font font-semibold mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#DEB94A] text-sm mb-4">
                                            {service.subtitle}
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            {service.points.map((point, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 15 22" fill="none">
                                                        <line y1="11.6499" x2="15" y2="11.6499" stroke="#DEB94A" />
                                                    </svg></span> {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button 
                                        onClick={handleReserveNow}
                                        className="mt-6 bg-[#DEB94A] text-center hover:bg-[#DEB94A]/90 font-semibold py-5 px-4 rounded-lg cursor-pointer transition duration-300 ease-in-out"
                                    >
                                        Reserve Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurServices;
