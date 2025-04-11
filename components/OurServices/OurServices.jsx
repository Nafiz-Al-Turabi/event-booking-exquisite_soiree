'use client';
import Image from 'next/image';
import React from 'react';
import image1 from '@/public/servicesImage/services1.png';
import image2 from '@/public/servicesImage/services2.png';
import image3 from '@/public/servicesImage/services3.png';

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
    },
];

const OurServices = () => {
    return (
        <section className="py-16 px-4 text-white relative z-40 ">
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
                                <button className="mt-6 bg-[#DEB94A] hover:bg-[#DEB94A]/90 font-semibold py-5 px-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
                                    Reserve Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
